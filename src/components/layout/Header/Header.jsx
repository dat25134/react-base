import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import './Header.css';
import ConfirmModal from '../../common/ConfirmModal/ConfirmModal';
import Button from '../../common/Button/Button';

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
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
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
              <Link to="/login">
                <Button variant="primary" size="small">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="outline" size="small">Sign Up</Button>
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