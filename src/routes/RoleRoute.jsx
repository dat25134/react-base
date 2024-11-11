import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../store/slices/authSlice';
import { useHasRole } from '../hooks/useAuth';
import { PATHS } from './paths';

const RoleRoute = ({ children, roles }) => {
  const user = useSelector(selectUser);
  const hasRequiredRole = useHasRole(roles);
  const location = useLocation();

  if (!user) {
    return <Navigate to={PATHS.LOGIN} state={{ from: location }} replace />;
  }

  if (!hasRequiredRole) {
    return <Navigate to={PATHS.HOME} replace />;
  }

  return children;
};

export default RoleRoute; 