import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../Context';
import generalRoman from './generalRoman.png';

const DIFFICULTIES = ['Minion', 'Champion', 'Overlord', 'Emperor'];

const DIFFICULTY_COLORS = {
  Minion:   '#8888a0',
  Champion: '#c9a84c',
  Overlord: '#c44040',
  Emperor:  '#9b6bd4',
};

const EMPTY_FORM = { title: '', description: '', date: '', difficulty: 'Minion' };

function formatDate(dateKey) {
  const [y, m, d] = dateKey.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('default', {
    weekday: 'short', month: 'short', day: 'numeric', year: 'numeric',
  });
}

function BattleEnemyItem({ item, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title:       item.title,
    difficulty:  item.difficulty ?? 'Minion',
    date:        item.date,
    description: item.description || '',
  });

  const diffColor = DIFFICULTY_COLORS[form.difficulty] ?? DIFFICULTY_COLORS.Minion;

  function handleSave(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    onEdit(item.id, { title: form.title.trim(), difficulty: form.difficulty, date: form.date, description: form.description });
    setEditing(false);
  }

  if (editing) {
    return (
      <form className="dashboard-item goal-edit-form" style={{ '--advisor-color': '#e05c5c' }} onSubmit={handleSave}>
        <input className="dashboard-input goal-edit-input" type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} autoFocus />
        <select
          className="dashboard-input dashboard-input--difficulty goal-edit-input"
          value={form.difficulty}
          onChange={e => setForm(f => ({ ...f, difficulty: e.target.value }))}
          style={{ '--diff-color': diffColor }}
        >
          {DIFFICULTIES.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input className="dashboard-input dashboard-input--date goal-edit-input" type="date" value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} />
        <input className="dashboard-input goal-edit-input" type="text" placeholder="Notes (optional)" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        <div className="goal-edit-actions">
          <button className="dashboard-add-btn" type="submit">Save</button>
          <button className="dashboard-back" type="button" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      </form>
    );
  }

  const itemDiffColor = DIFFICULTY_COLORS[item.difficulty] ?? DIFFICULTY_COLORS.Minion;
  return (
    <div className="dashboard-item battle-enemy-item" style={{ '--diff-color': itemDiffColor }}>
      <div className="dashboard-item-body">
        <span className="dashboard-item-title">{item.title}</span>
        <span className="battle-difficulty-badge">{item.difficulty ?? 'Minion'}</span>
        <span className="dashboard-item-date">{formatDate(item.date)}</span>
        {item.description && <span className="dashboard-item-desc">{item.description}</span>}
      </div>
      <div className="goal-item-actions">
        <button className="goal-edit-btn" onClick={() => setEditing(true)} title="Edit">✎</button>
        <button className="dashboard-item-delete" onClick={() => onDelete(item.id)} title="Remove">✕</button>
      </div>
    </div>
  );
}

function BattleDashboard() {
  const navigate = useNavigate();
  const { calendarEvents, addCalendarEvent, editCalendarEvent, deleteCalendarEvent } = useAppContext();
  const [form, setForm]   = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  const enemies = calendarEvents
    .filter(e => e.category === 'battle')
    .sort((a, b) => a.date.localeCompare(b.date));

  function handleAdd(e) {
    e.preventDefault();
    if (!form.title.trim()) { setError('A name is required.'); return; }
    if (!form.date)         { setError('A date is required.'); return; }
    addCalendarEvent({ ...form, title: form.title.trim(), category: 'battle' });
    setForm(EMPTY_FORM);
    setError('');
  }

  return (
    <div className="dashboard-page" style={{ '--advisor-color': '#e05c5c' }}>
      <img src={generalRoman} alt="" className="battle-general-img" />

      <div className="dashboard-header">
        <button className="dashboard-back" onClick={() => navigate('/council')}>← Council</button>
        <h1 className="dashboard-title">General Roman - Battle Advisor</h1>
      </div>

      <form className="dashboard-form" onSubmit={handleAdd}>
        <h2 className="dashboard-form-heading">Add Enemy</h2>
        <div className="dashboard-form-row">
          <input
            className="dashboard-input"
            type="text"
            placeholder="Task"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
          />
          <select
            className="dashboard-input dashboard-input--difficulty"
            value={form.difficulty}
            onChange={e => setForm(f => ({ ...f, difficulty: e.target.value }))}
            style={{ '--diff-color': DIFFICULTY_COLORS[form.difficulty] }}
          >
            {DIFFICULTIES.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <input
            className="dashboard-input dashboard-input--date"
            type="date"
            value={form.date}
            onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
          />
          <input
            className="dashboard-input"
            type="text"
            placeholder="Notes (optional)"
            value={form.description}
            onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
          />
          <button className="dashboard-add-btn" type="submit">Add</button>
        </div>
        {error && <p className="dashboard-error">{error}</p>}
      </form>

      <div className="dashboard-box dashboard-box--standard">

        <div className="dashboard-panel">
          <div className="dashboard-panel-heading">Enemies</div>
          <div className="dashboard-panel-content">
            {enemies.length === 0 ? (
              <p className="dashboard-panel-placeholder">No enemies logged yet.</p>
            ) : (
              enemies.map(item => (
                <BattleEnemyItem
                  key={item.id}
                  item={item}
                  onEdit={editCalendarEvent}
                  onDelete={deleteCalendarEvent}
                />
              ))
            )}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-heading">Analytics & Suggestions</div>
          <div className="dashboard-panel-content">
            <p className="dashboard-panel-placeholder">Graphs and suggestions coming soon.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default BattleDashboard;
