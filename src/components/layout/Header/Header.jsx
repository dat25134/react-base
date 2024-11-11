import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './Header.css';
import ConfirmModal from '../../common/ConfirmModal/ConfirmModal';
import Button from '../../common/Button/Button';
import { PATHS } from '../../../routes/paths';
import { ROLES } from '../../../contexts/AuthContext';

const Header = () => {
  const { user, logout, hasRole } = useAuth();
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmLogout = async () => {
    await logout();
    setShowConfirmModal(false);
    navigate(PATHS.HOME);
  };

  const getNavLinks = () => {
    const links = [
      { to: PATHS.HOME, label: 'Home' },
      { to: PATHS.CONTACT, label: 'Contact' },
    ];

    if (hasRole(ROLES.USER)) {
      links.push({ to: PATHS.ABOUT, label: 'About' });
    }

    if (hasRole(ROLES.ADMIN)) {
      links.push({ to: PATHS.ADMIN.DASHBOARD, label: 'Admin Dashboard' });
    }

    return links;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to={PATHS.HOME}>
            <h1>Logo</h1>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <ul>
            {getNavLinks().map(({ to, label }) => (
              <li key={to}>
                <NavLink 
                  to={to}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  end={to === PATHS.HOME}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <Button 
                variant="danger"
                size="small"
                onClick={handleLogoutClick}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to={PATHS.LOGIN}>
                <Button variant="primary" size="small">Login</Button>
              </Link>
              <Link to={PATHS.AUTH.SIGNUP}>
                <Button variant="secondary" size="small">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmLogout}
        title="Xác nhận đăng xuất"
        message="Bạn có chắc chắn muốn đăng xuất?"
      />
    </header>
  );
};

export default Header; 