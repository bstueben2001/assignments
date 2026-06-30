import { useState, useMemo, useEffect, useRef } from 'react';

function readLS(key, fallback) {
  try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; }
  catch { return fallback; }
}

const COLS = 12;
const ROWS = 7;
const S = 22;
const COL_STEP   = S * Math.sqrt(3);
const ROW_STEP   = S * 1.5;
const ROW_OFFSET = COL_STEP / 2;
const PAD = 26;

const HEX_PTS = Array.from({ length: 6 }, (_, i) => {
  const a = (Math.PI / 180) * (60 * i - 30);
  return `${(S * Math.cos(a)).toFixed(3)},${(S * Math.sin(a)).toFixed(3)}`;
}).join(' ');

const GRID_W = PAD + (COLS - 1) * COL_STEP + ROW_OFFSET + COL_STEP / 2 + 2;
const GRID_H = PAD + (ROWS - 1) * ROW_STEP + S + 4;

const DIFF_MIN = {
  Minion:    10,
  Captain:   30,
  Champion:  60,
  Commander: 180,
  General:   360,
  Overlord:  720,
  Prophet:   1440,
  Emperor:   3000,
  God:       6000,
};

const DIFF_COLORS = {
  Minion:    '#8888a0',
  Captain:   '#5b9e5b',
  Champion:  '#c9a84c',
  Commander: '#4a8fbc',
  General:   '#c87840',
  Overlord:  '#c44040',
  Prophet:   '#8844cc',
  Emperor:   '#9b6bd4',
  God:       '#ffd700',
};

const ENEMY_SLOTS = Array.from({ length: COLS - 6 }, (_, ci) => {
  const col = COLS - 1 - ci;
  return Array.from({ length: ROWS }, (_, row) => `${row},${col}`);
}).flat();

const CHAMPION_KEY = `${Math.floor(ROWS / 2)},2`;

const SLEEP_SLOTS = Array.from({ length: ROWS }, (_, row) => `${row},0`);

const ALLY_SLOTS = Array.from({ length: 5 }, (_, ci) => {
  const col = ci + 1;
  return Array.from({ length: ROWS }, (_, row) => `${row},${col}`);
}).flat().filter(k => k !== CHAMPION_KEY);

function darkFill(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.round(r * 0.22)},${Math.round(g * 0.22)},${Math.round(b * 0.22)})`;
}

const ALLY_FILL    = '#0e1f30';
const ALLY_STROKE  = '#60b8f0';
const SLEEP_FILL   = '#080e1e';
const SLEEP_STROKE = '#2a5090';
const CHAMP_FILL   = '#231000';
const CHAMP_STROKE = '#e07830';
const EMPTY_FILL   = 'rgba(14,18,38,0.5)';
const EMPTY_STROKE = '#2a3255';

function makeInitialSpriteMap() {
  return { [CHAMPION_KEY]: { type: 'champion', min: 120, maxMin: 120 } };
}

export default function BattleHexGrid({ enemies = [], spriteCount = 0, sleepSpriteCount = 0, deployId = 0, onSlay, onHpChange, highlightedEnemyId = null }) {
  const [spriteMap, setSpriteMap] = useState(() => readLS('battle_spriteMap', makeInitialSpriteMap()));
  const [selected,  setSelected]  = useState(null);
  const [enemyHp,   setEnemyHp]   = useState(() => readLS('battle_enemyHp', {}));

  // Only reset when deployId actually increments — not on mount or StrictMode double-invoke
  const prevDeployId = useRef(deployId);

  useEffect(() => {
    if (prevDeployId.current === deployId) return;
    prevDeployId.current = deployId;
    const next = { [CHAMPION_KEY]: { type: 'champion', min: 120, maxMin: 120 } };
    ALLY_SLOTS.slice(0, spriteCount).forEach(key => {
      next[key] = { type: 'ally', min: 60, maxMin: 60 };
    });
    SLEEP_SLOTS.slice(0, sleepSpriteCount).forEach(key => {
      next[key] = { type: 'sleep', min: 60, maxMin: 60 };
    });
    setSpriteMap(next);
    setSelected(null);
    setEnemyHp({});
  }, [deployId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Persist combat state
  useEffect(() => { localStorage.setItem('battle_spriteMap', JSON.stringify(spriteMap)); }, [spriteMap]);
  useEffect(() => { localStorage.setItem('battle_enemyHp',   JSON.stringify(enemyHp));   }, [enemyHp]);

  // Sync HP snapshot to parent for the list to display
  useEffect(() => {
    onHpChange?.(enemyHp);
  }, [enemyHp, onHpChange]);

  const enemyMap = useMemo(() => {
    const map = {};
    enemies.forEach((enemy, i) => {
      if (i < ENEMY_SLOTS.length) map[ENEMY_SLOTS[i]] = enemy;
    });
    return map;
  }, [enemies]);

  function getEnemyHp(enemy) {
    return enemyHp[enemy.id] !== undefined
      ? enemyHp[enemy.id]
      : (DIFF_MIN[enemy.difficulty] ?? 10);
  }

  function handleSpriteClick(key) {
    const sprite = spriteMap[key];
    if (!sprite || sprite.min <= 0) return;
    setSelected(prev => prev === key ? null : key);
  }

  function handleEnemyClick(enemy) {
    if (!selected) return;
    const sprite = spriteMap[selected];
    if (!sprite || sprite.min <= 0) { setSelected(null); return; }

    const currentHp = getEnemyHp(enemy);
    if (currentHp <= 0) { setSelected(null); return; }

    if (sprite.min >= currentHp) {
      const leftover = sprite.min - currentHp;
      setSpriteMap(prev => ({ ...prev, [selected]: { ...prev[selected], min: leftover } }));
      setEnemyHp(prev => ({ ...prev, [enemy.id]: 0 }));
      onSlay?.(enemy.id);
    } else {
      setSpriteMap(prev => ({ ...prev, [selected]: { ...prev[selected], min: 0 } }));
      setEnemyHp(prev => ({ ...prev, [enemy.id]: currentHp - sprite.min }));
    }
    setSelected(null);
  }

  const hasAnything = spriteCount > 0 || sleepSpriteCount > 0;

  return (
    <div className="hex-grid-wrapper">
      {selected && (
        <div className="hex-grid-select-hint">
          Select an enemy to attack · <button className="hex-grid-deselect" onClick={() => setSelected(null)}>Cancel</button>
        </div>
      )}
      <svg
        viewBox={`0 0 ${GRID_W.toFixed(1)} ${GRID_H.toFixed(1)}`}
        className="hex-grid-svg"
        preserveAspectRatio="xMidYMid meet"
        onClick={() => setSelected(null)}
      >
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const key   = `${r},${c}`;
            const enemy = enemyMap[key];
            const x = PAD + c * COL_STEP + (r % 2 === 1 ? ROW_OFFSET : 0);
            const y = PAD + r * ROW_STEP;

            // ── Enemy hex ──
            if (enemy) {
              const currentHp = getEnemyHp(enemy);
              if (currentHp <= 0) {
                return (
                  <polygon key={key} className="hex-cell hex-cell--static" points={HEX_PTS}
                    fill={EMPTY_FILL} stroke={EMPTY_STROKE} strokeWidth="1.2"
                    transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`} />
                );
              }
              const color       = DIFF_COLORS[enemy.difficulty] ?? DIFF_COLORS.Minion;
              const maxHp       = DIFF_MIN[enemy.difficulty] ?? 10;
              const isTarget    = !!selected;
              const isHighlight = enemy.id === highlightedEnemyId;
              return (
                <g key={key} transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`}
                  onClick={e => { e.stopPropagation(); handleEnemyClick(enemy); }}
                  style={{ cursor: isTarget ? 'crosshair' : 'default' }}
                >
                  <title>{enemy.title} · {enemy.difficulty} · {currentHp} / {maxHp} min</title>
                  <polygon
                    className={`hex-cell hex-cell--enemy${isTarget ? ' hex-cell--targetable' : ''}${isHighlight ? ' hex-cell--selected' : ''}`}
                    points={HEX_PTS}
                    fill={darkFill(color)}
                    stroke={color}
                    strokeWidth="1.6"
                  />
                </g>
              );
            }

            // ── Champion hex ──
            if (key === CHAMPION_KEY) {
              const champData = spriteMap[CHAMPION_KEY];
              const champMin  = champData?.min ?? 120;
              const isSelected = selected === CHAMPION_KEY;
              const isDepleted = champMin <= 0;
              return (
                <g key={key} transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`}
                  onClick={e => { e.stopPropagation(); handleSpriteClick(CHAMPION_KEY); }}
                  style={{ cursor: isDepleted ? 'default' : 'pointer' }}
                >
                  <title>Stalwart Champion (You) · {champMin} / 120 min</title>
                  <polygon
                    className={`hex-cell${isSelected ? ' hex-cell--selected' : ''}`}
                    points={HEX_PTS}
                    fill={isDepleted ? 'rgba(14,18,38,0.5)' : CHAMP_FILL}
                    stroke={isDepleted ? '#3a2010' : CHAMP_STROKE}
                    strokeWidth="2"
                    opacity={isDepleted ? 0.4 : 1}
                  />
                </g>
              );
            }

            // ── Sprite hex ──
            const sprite = spriteMap[key];
            if (sprite && sprite.min > 0) {
              const isAlly     = sprite.type === 'ally';
              const isSelected = selected === key;
              const fill   = isAlly ? ALLY_FILL   : SLEEP_FILL;
              const stroke = isAlly ? ALLY_STROKE  : SLEEP_STROKE;
              return (
                <g key={key} transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`}
                  onClick={e => { e.stopPropagation(); handleSpriteClick(key); }}
                  style={{ cursor: 'pointer' }}
                >
                  <title>{isAlly ? 'Sprite' : 'Sleep Sprites'} · {sprite.min} / {sprite.maxMin} min</title>
                  <polygon
                    className={`hex-cell${isSelected ? ' hex-cell--selected' : ''}`}
                    points={HEX_PTS}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth="1.6"
                  />
                </g>
              );
            }

            // ── Empty hex ──
            return (
              <polygon key={key} className="hex-cell hex-cell--static" points={HEX_PTS}
                fill={EMPTY_FILL} stroke={EMPTY_STROKE} strokeWidth="1.2"
                transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`} />
            );
          })
        )}
      </svg>
      <div className="hex-grid-footer">
        <div className="hex-grid-legend">
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: CHAMP_STROKE }} />
            Stalwart Champion
          </span>
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: SLEEP_STROKE }} />
            Sleep Sprites
          </span>
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: ALLY_STROKE }} />
            Sprites
          </span>
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: '#c44040' }} />
            <span style={{ opacity: 0.55, fontStyle: 'italic' }}>(hover for stats)</span>
          </span>
        </div>
        {hasAnything && (
          <span className="hex-grid-hint">
            {spriteCount} sprite{spriteCount !== 1 ? 's' : ''}
            {sleepSpriteCount > 0 ? ` · ${sleepSpriteCount} sleep sprites` : ''} deployed
          </span>
        )}
      </div>
    </div>
  );
}
