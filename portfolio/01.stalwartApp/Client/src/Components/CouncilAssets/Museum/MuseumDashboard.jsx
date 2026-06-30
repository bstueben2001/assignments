import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import curatorDyllan from './curatorDyllan.png';

const EMPTY_FORM = { title: '', description: '' };

function MuseumDashboard() {
  const navigate = useNavigate();
  const [exhibits, setExhibits] = useState([]);
  const [form, setForm]   = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  function handleAdd(e) {
    e.preventDefault();
    if (!form.title.trim()) { setError('A title is required.'); return; }
    setExhibits(prev => [...prev, { id: Date.now(), title: form.title.trim(), description: form.description }]);
    setForm(EMPTY_FORM);
    setError('');
  }

  return (
    <div className="dashboard-page" style={{ '--advisor-color': '#c4714a' }}>
      <img src={curatorDyllan} alt="" className="advisor-char-img" />

      <div className="dashboard-header">
        <button className="dashboard-back" onClick={() => navigate('/council')}>← Council</button>
        <h1 className="dashboard-title">Curator Dyllan - The Museum</h1>
      </div>

      <form className="dashboard-form" onSubmit={handleAdd}>
        <h2 className="dashboard-form-heading">Add Exhibit</h2>
        <div className="dashboard-form-row">
          <input
            className="dashboard-input"
            type="text"
            placeholder="Exhibit title"
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
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
          <div className="dashboard-panel-heading">Exhibits</div>
          <div className="dashboard-panel-content">
            {exhibits.length === 0 ? (
              <p className="dashboard-panel-placeholder">No exhibits yet.</p>
            ) : (
              exhibits.map(item => (
                <div key={item.id} className="dashboard-item">
                  <div className="dashboard-item-body">
                    <span className="dashboard-item-title">{item.title}</span>
                    {item.description && <span className="dashboard-item-desc">{item.description}</span>}
                  </div>
                  <button
                    className="dashboard-item-delete"
                    onClick={() => setExhibits(prev => prev.filter(e => e.id !== item.id))}
                    title="Remove"
                  >✕</button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="dashboard-panel-heading">Gallery</div>
          <div className="dashboard-panel-content">
            <p className="dashboard-panel-placeholder">Gallery coming soon.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MuseumDashboard;
