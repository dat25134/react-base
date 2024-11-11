import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth, useHasRole } from '../../../hooks/useAuth';
import { ROLES } from '../../../constants/roles';
import Button from '../../common/Button/Button';
import ConfirmModal from '../../common/ConfirmModal/ConfirmModal';
import { PATHS } from '../../../routes/paths';
import { withLoading } from '../../../utils/withLoading';

const Header = () => {
  const { user, logout } = useAuth();
  const isAdmin = useHasRole(ROLES.ADMIN);
  const isUser = useHasRole(ROLES.USER);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleLogout = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmLogout = async () => {
    await withLoading(async () => {
      await logout();
    });
    
    setShowConfirmModal(false);
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
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary-600">
              Logo
            </Link>
          </div>

          <nav className="hidden md:flex space-x-4">
            {getNavLinks().map((link) => (
              <NavLink 
                  to={link.to}
                  className={({ isActive }) => isActive ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-600 transition-colors'}
                  end={link.to === PATHS.HOME}
              >
                  {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="text-gray-600 hover:text-primary-600"
                >
                  {user.email}
                </Link>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login">
                <Button variant="primary" size="small">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      <ConfirmModal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to logout?"
      />
    </header>
  );
};

export default Header; 