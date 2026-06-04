function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Hail Mary Inventory Manifest</div>
      <ul className="navbar-links">
        <li><a onClick={() => setPage('home')}>Home</a></li>
        <li><a onClick={() => setPage('inventory')}>Inventory</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
