import { useState, useMemo, useCallback } from 'react';

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

// Right-side placement slots: rightmost column first, top to bottom, then next column left
const ENEMY_SLOTS = Array.from({ length: COLS - 6 }, (_, ci) => {
  const col = COLS - 1 - ci;
  return Array.from({ length: ROWS }, (_, row) => `${row},${col}`);
}).flat();

function darkFill(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.round(r * 0.22)},${Math.round(g * 0.22)},${Math.round(b * 0.22)})`;
}

const ALLY_FILL   = '#173324';
const ALLY_STROKE = '#3d9957';
const EMPTY_FILL   = 'rgba(14,18,38,0.5)';
const EMPTY_STROKE = '#2a3255';

function makeAllyCells() {
  const cells = {};
  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      cells[`${r},${c}`] = false;
  return cells;
}

export default function BattleHexGrid({ enemies = [] }) {
  const [allyCells, setAllyCells] = useState(makeAllyCells);

  const enemyMap = useMemo(() => {
    const map = {};
    enemies.forEach((enemy, i) => {
      if (i < ENEMY_SLOTS.length) map[ENEMY_SLOTS[i]] = enemy;
    });
    return map;
  }, [enemies]);

  const toggleAlly = useCallback((key, e) => {
    e.preventDefault();
    if (enemyMap[key]) return;
    setAllyCells(prev => ({ ...prev, [key]: !prev[key] }));
  }, [enemyMap]);

  const reset = useCallback(() => setAllyCells(makeAllyCells), []);

  return (
    <div className="hex-grid-wrapper">
      <svg
        viewBox={`0 0 ${GRID_W.toFixed(1)} ${GRID_H.toFixed(1)}`}
        className="hex-grid-svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from({ length: ROWS }, (_, r) =>
          Array.from({ length: COLS }, (_, c) => {
            const key   = `${r},${c}`;
            const enemy = enemyMap[key];
            const x = PAD + c * COL_STEP + (r % 2 === 1 ? ROW_OFFSET : 0);
            const y = PAD + r * ROW_STEP;

            if (enemy) {
              const color = DIFF_COLORS[enemy.difficulty] ?? DIFF_COLORS.Minion;
              return (
                <g key={key} transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`}>
                  <title>{enemy.title} ({enemy.difficulty})</title>
                  <polygon
                    className="hex-cell hex-cell--enemy"
                    points={HEX_PTS}
                    fill={darkFill(color)}
                    stroke={color}
                    strokeWidth="1.6"
                  />
                </g>
              );
            }

            const isAlly = allyCells[key];
            return (
              <polygon
                key={key}
                className="hex-cell"
                points={HEX_PTS}
                fill={isAlly ? ALLY_FILL : EMPTY_FILL}
                stroke={isAlly ? ALLY_STROKE : EMPTY_STROKE}
                strokeWidth="1.2"
                transform={`translate(${x.toFixed(2)},${y.toFixed(2)})`}
                onClick={e => toggleAlly(key, e)}
                onContextMenu={e => toggleAlly(key, e)}
              />
            );
          })
        )}
      </svg>
      <div className="hex-grid-footer">
        <div className="hex-grid-legend">
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: ALLY_STROKE }} />
            Your Forces
          </span>
          <span className="hex-legend-item">
            <span className="hex-legend-swatch" style={{ background: '#c44040' }} />
            Enemy <span style={{ opacity: 0.55, fontStyle: 'italic' }}>(color = difficulty · hover for name)</span>
          </span>
        </div>
        <div className="hex-grid-hints">
          <span className="hex-grid-hint">click to place · click again to remove</span>
          <button className="hex-grid-clear" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}
