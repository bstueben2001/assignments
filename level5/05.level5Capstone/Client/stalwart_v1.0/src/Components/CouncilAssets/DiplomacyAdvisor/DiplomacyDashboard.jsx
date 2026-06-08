import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../Context';
import RelationCard from './RelationCard';

const STATUSES = ['good', 'great', 'distant', 'strained', 'complicated'];
const EMPTY_FORM = { name: '', birthday: '', favorites: '', relationshipStatus: 'good' };

function DiplomacyDashboard() {
  const navigate = useNavigate();
  const { relations, addRelation, deleteRelation } = useAppContext();
  const [form, setForm]   = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    if (!form.name.trim()) { setError('A name is required.'); return; }
    addRelation({
      name:               form.name.trim(),
      birthday:           form.birthday,
      favorites:          form.favorites.split(',').map(f => f.trim()).filter(Boolean),
      relationshipStatus: form.relationshipStatus,
    });
    setForm(EMPTY_FORM);
    setError('');
  }

  return (
    <div className="dashboard-page" style={{ '--advisor-color': '#5b8de8' }}>

      <div className="dashboard-header">
        <button className="dashboard-back" onClick={() => navigate('/council')}>← Council</button>
        <h1 className="dashboard-title">Diplomacy Advisor</h1>
      </div>

      <form className="dashboard-form" onSubmit={handleAdd}>
        <h2 className="dashboard-form-heading">Add Friend</h2>
        <div className="dashboard-form-row">
          <input
            className="dashboard-input"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          />
          <input
            className="dashboard-input dashboard-input--date"
            type="date"
            title="Birthday"
            value={form.birthday}
            onChange={e => setForm(f => ({ ...f, birthday: e.target.value }))}
          />
          <input
            className="dashboard-input"
            type="text"
            placeholder="Favorites (comma-separated)"
            value={form.favorites}
            onChange={e => setForm(f => ({ ...f, favorites: e.target.value }))}
          />
          <select
            className="dashboard-input"
            value={form.relationshipStatus}
            onChange={e => setForm(f => ({ ...f, relationshipStatus: e.target.value }))}
          >
            {STATUSES.map(s => (
              <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>
            ))}
          </select>
          <button className="dashboard-add-btn" type="submit">Add</button>
        </div>
        {error && <p className="dashboard-error">{error}</p>}
      </form>

      <div className="dashboard-box dashboard-box--diplomacy">

        <div className="dashboard-panel">
          <div className="dashboard-panel-heading">Friends</div>
          <div className="dashboard-panel-content dashboard-panel-content--flush">
            {relations.length === 0 ? (
              <p className="dashboard-panel-placeholder">No friends added yet. Add one above.</p>
            ) : (
              relations.map(r => (
                <RelationCard
                  key={r.id}
                  relation={r}
                  onDelete={() => deleteRelation(r.id)}
                />
              ))
            )}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-heading">Suggestions</div>
          <div className="dashboard-panel-content">
            <p className="dashboard-panel-placeholder">Suggestions coming soon.</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DiplomacyDashboard;
