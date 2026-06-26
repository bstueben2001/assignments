import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../Context';
import AuthModal from './AuthModal';

function Navbar() {
  const { user, logout } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [defaultTab, setDefaultTab] = useState('login');

  function openLogin() { setDefaultTab('login'); setShowModal(true); }
  function openSignup() { setDefaultTab('signup'); setShowModal(true); }

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/council">Council</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/settings">Settings</NavLink>

        <div className="nav-spacer" />

        <div className="nav-auth">
          {user ? (
            <>
              <span className="nav-user">Hail, <span>{user.username}</span></span>
              <button className="nav-auth-btn nav-auth-btn--ghost" onClick={logout}>Log Out</button>
            </>
          ) : (
            <>
              <button className="nav-auth-btn nav-auth-btn--ghost" onClick={openLogin}>Log In</button>
              <button className="nav-auth-btn nav-auth-btn--primary" onClick={openSignup}>Sign Up</button>
            </>
          )}
        </div>
      </nav>

      {showModal && <AuthModal defaultTab={defaultTab} onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Navbar;
