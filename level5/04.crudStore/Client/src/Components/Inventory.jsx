import { useState, useEffect } from 'react';
import rockyImg from '../assets/rocky.png';

function Inventory() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/inventory')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <div className="inventory-page"><p className="inventory-error">Failed to load inventory: {error}</p></div>;

  return (
    <div className="inventory-page">
    <section className="inventory">
      <h2>Inventory</h2>
      {items.length === 0 ? (
        <p className="inventory-empty">No items found.</p>
      ) : (
        <div className="inventory-grid">
          {items.map(item => (
            <div key={item._id} className="inventory-card">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span className="inventory-price">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      )}
    </section>
    <img src={rockyImg} className="rocky-rolling" alt="" />
    </div>
  );
}

export default Inventory;
