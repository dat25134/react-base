import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RoleRoute from './RoleRoute';
import { publicRoutes, privateRoutes } from './config';
import { PATHS } from './paths';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {publicRoutes.map(({ path, component: Component, exact }) => (
          <Route
            key={path}
            path={path}
            element={<Component />}
            exact={exact}
          />
        ))}

        {/* Private Routes with Roles */}
        {privateRoutes.map(({ path, component: Component, roles }) => (
          <Route
            key={path}
            path={path}
            element={
              <RoleRoute roles={roles}>
                <Component />
              </RoleRoute>
            }
          />
        ))}

        <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 