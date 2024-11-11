import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { PATHS } from './paths';

const RoleRoute = ({ children, roles }) => {
  const { user, hasRole } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  if (!hasRole(roles)) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  return children;
};

export default RoleRoute; 