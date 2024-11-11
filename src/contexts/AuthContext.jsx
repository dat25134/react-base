import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const ROLES = {
  ADMIN: 'ADMIN',
  USER: 'USER',
  MANAGER: 'MANAGER'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const hasRole = (requiredRoles) => {
    if (!user || !user.roles) return false;
    if (Array.isArray(requiredRoles)) {
      return requiredRoles.some(role => user.roles.includes(role));
    }
    return user.roles.includes(requiredRoles);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, hasRole }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);