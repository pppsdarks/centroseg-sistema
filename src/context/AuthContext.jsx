import { createContext, useContext, useState } from 'react';
import { currentUser } from '../data/mockData';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [unidade, setUnidade] = useState('Curitiba');

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const value = {
    isAuthenticated,
    login,
    logout,
    unidade,
    setUnidade,
    user: currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
