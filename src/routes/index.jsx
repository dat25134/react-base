import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
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

        {/* Private Routes */}
        {privateRoutes.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Component />
              </PrivateRoute>
            }
          />
        ))}

        {/* Catch all route - 404 */}
        <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 