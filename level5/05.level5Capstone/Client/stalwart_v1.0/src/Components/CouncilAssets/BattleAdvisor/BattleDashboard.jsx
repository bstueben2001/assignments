import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../Context';

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

function BattleDashboard() {
  const navigate = useNavigate();
  const { calendarEvents, addCalendarEvent, deleteCalendarEvent } = useAppContext();
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

      <div className="dashboard-header">
        <button className="dashboard-back" onClick={() => navigate('/council')}>← Council</button>
        <h1 className="dashboard-title">Battle Advisor</h1>
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
                <div
                  key={item.id}
                  className="dashboard-item battle-enemy-item"
                  style={{ '--diff-color': DIFFICULTY_COLORS[item.difficulty] ?? DIFFICULTY_COLORS.Minion }}
                >
                  <div className="dashboard-item-body">
                    <span className="dashboard-item-title">{item.title}</span>
                    <span className="battle-difficulty-badge">{item.difficulty ?? 'Minion'}</span>
                    <span className="dashboard-item-date">{formatDate(item.date)}</span>
                    {item.description && (
                      <span className="dashboard-item-desc">{item.description}</span>
                    )}
                  </div>
                  <button
                    className="dashboard-item-delete"
                    onClick={() => deleteCalendarEvent(item.id)}
                    title="Remove"
                  >✕</button>
                </div>
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
