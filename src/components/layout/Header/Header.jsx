import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './Header.css';
import ConfirmModal from '../../common/ConfirmModal/ConfirmModal';
import Button from '../../common/Button/Button';
import { PATHS } from '../../../routes/paths';

const Header = () => {
  const { user, logout } = useAuth();
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
            <li>
              <NavLink 
                to={PATHS.HOME}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={PATHS.ABOUT}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to={PATHS.CONTACT}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </NavLink>
            </li>
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