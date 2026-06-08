import { useState } from 'react';
import { useAppContext } from '../../../Context';

const STATUS_COLORS = {
  great:       '#4caf82',
  good:        '#c9a84c',
  distant:     '#8888a0',
  strained:    '#d4a017',
  complicated: '#e05c5c',
};

function formatBirthday(dateStr) {
  if (!dateStr) return null;
  const [, m, d] = dateStr.split('-').map(Number);
  return new Date(2000, m - 1, d).toLocaleDateString('default', { month: 'long', day: 'numeric' });
}

const EMPTY_PLANS = { date: '', description: '' };

function RelationCard({ relation, onDelete }) {
  const { addCalendarEvent } = useAppContext();
  const [plansOpen, setPlansOpen] = useState(false);
  const [plans, setPlans]         = useState(EMPTY_PLANS);
  const [error, setError]         = useState('');

  const statusColor = STATUS_COLORS[relation.relationshipStatus] ?? STATUS_COLORS.good;

  function handleMakePlans(e) {
    e.preventDefault();
    if (!plans.date) { setError('A date is required.'); return; }
    addCalendarEvent({
      title:       `Plans with ${relation.name}`,
      date:        plans.date,
      description: plans.description,
      category:    'diplomacy',
    });
    setPlans(EMPTY_PLANS);
    setError('');
    setPlansOpen(false);
  }

  return (
    <div className="relation-card" style={{ '--status-color': statusColor }}>

      <div className="relation-card-header">
        <span className="relation-status-dot" />
        <h3 className="relation-card-name">{relation.name}</h3>
        <div className="relation-status-row">
          <span className="relation-status-label">{relation.relationshipStatus}</span>
        </div>
        {relation.birthday && (
          <span className="relation-birthday">🎂 {formatBirthday(relation.birthday)}</span>
        )}
        {relation.favorites?.length > 0 && (
          <div className="relation-favorites">
            {relation.favorites.map((f, i) => (
              <span key={i} className="relation-favorite-tag">{f}</span>
            ))}
          </div>
        )}
        <button
          className="relation-plans-btn"
          onClick={() => { setPlansOpen(v => !v); setError(''); }}
        >
          {plansOpen ? 'Cancel' : 'Make Plans'}
        </button>
        <button className="relation-card-delete" onClick={onDelete} title="Remove">✕</button>
      </div>

      {plansOpen && (
        <form className="relation-plans-form" onSubmit={handleMakePlans}>
          <input
            className="relation-plans-input"
            type="date"
            value={plans.date}
            onChange={e => setPlans(p => ({ ...p, date: e.target.value }))}
          />
          <input
            className="relation-plans-input"
            type="text"
            placeholder="Activity or description (optional)"
            value={plans.description}
            onChange={e => setPlans(p => ({ ...p, description: e.target.value }))}
          />
          {error && <p className="relation-plans-error">{error}</p>}
          <button className="relation-plans-submit" type="submit">Add to Calendar</button>
        </form>
      )}

    </div>
  );
}

export default RelationCard;
