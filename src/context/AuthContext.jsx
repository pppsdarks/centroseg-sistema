import { createContext, useContext, useState } from 'react';
import { currentUser } from '../data/mockData';

const AuthContext = createContext(null);

const ACCESS_CODES = {
  'FIN-2026': 'financeiro',
  'SOCIO-2026': 'socio',
};

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [unidade, setUnidade] = useState('Ponta Grossa');
  const [role, setRole] = useState('padrao');

  const login = () => setIsAuthenticated(true);
  const logout = () => {
    setIsAuthenticated(false);
    setRole('padrao');
  };

  function unlockRole(code) {
    const normalized = code.trim().toUpperCase();
    const unlocked = ACCESS_CODES[normalized];
    if (!unlocked) return false;
    setRole((current) => (current === 'socio' ? current : unlocked));
    return true;
  }

  const value = {
    isAuthenticated,
    login,
    logout,
    unidade,
    setUnidade,
    role,
    unlockRole,
    hasFinanceiroAccess: role === 'financeiro' || role === 'socio',
    isSocio: role === 'socio',
    user: currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
