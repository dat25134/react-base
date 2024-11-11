import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth, useHasRole } from '../../../hooks/useAuth';
import { ROLES } from '../../../constants/roles';
import { PATHS } from '../../../routes/paths';
import Button from '../../../components/common/Button/Button';
import ConfirmModal from '../../../components/common/ConfirmModal/ConfirmModal';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const isUser = useHasRole(ROLES.USER);
  const isAdmin = useHasRole(ROLES.ADMIN);

  const handleLogoutClick = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmLogout = async () => {
    const success = await logout();
    if (success) {
      setShowConfirmModal(false);
      navigate(PATHS.LOGIN);
    }
  };

  const getNavLinks = () => {
    const links = [
      { to: PATHS.HOME, label: 'Home' },
      { to: PATHS.CONTACT, label: 'Contact' },
    ];

    if (isUser) {
      links.push({ to: PATHS.ABOUT, label: 'About' });
    }

    if (isAdmin) {
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