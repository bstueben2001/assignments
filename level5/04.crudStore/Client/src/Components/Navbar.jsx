function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CRUD Store</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/inventory">Inventory</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
