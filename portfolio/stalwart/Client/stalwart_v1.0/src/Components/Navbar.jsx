import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/council">Council</NavLink>
      <NavLink to="/calendar">Calendar</NavLink>
      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;
