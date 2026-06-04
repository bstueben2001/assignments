import { useState, useEffect } from 'react';

function Inventory() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/inventory')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p className="inventory-error">Failed to load inventory: {error}</p>;

  return (
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
  );
}

export default Inventory;
