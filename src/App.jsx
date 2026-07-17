import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './components/Layout/Layout';
import Login from './components/pages/Login';
import Dashboard from './components/pages/Dashboard';
import ClientesContratos from './components/pages/ClientesContratos';
import Comercial from './components/pages/Comercial';
import ContratosDetalhado from './components/pages/ContratosDetalhado';
import Financeiro from './components/pages/Financeiro';
import Operacional from './components/pages/Operacional';
import Relatorios from './components/pages/Relatorios';

function RequireAuth({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clientes" element={<ClientesContratos />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/contratos" element={<ContratosDetalhado />} />
        <Route path="/financeiro" element={<Financeiro />} />
        <Route path="/operacional" element={<Operacional />} />
        <Route path="/relatorios" element={<Relatorios />} />
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
