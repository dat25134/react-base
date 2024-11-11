import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PATHS } from './paths';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // Redirect to login page with return url
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute; 