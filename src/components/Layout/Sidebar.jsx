import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Visão Geral', icon: '⊞' },
  { to: '/comercial', label: 'Comercial', icon: '📈' },
  { to: '/marketing', label: 'Marketing', icon: '📣' },
  { to: '/clientes', label: 'Clientes e Contratos', icon: '📄' },
  { to: '/operacional', label: 'Operacional', icon: '🛡' },
  { to: '/financeiro', label: 'Financeiro', icon: '$', gated: true },
  { to: '/relatorios', label: 'Relatórios', icon: '📊' },
];

export default function Sidebar({ open, onClose }) {
  const { unidade, hasFinanceiroAccess } = useAuth();

  return (
    <aside className={`app-sidebar ${open ? 'app-sidebar--open' : ''}`}>
      <button type="button" className="sidebar-close-btn" onClick={onClose} aria-label="Fechar menu">
        ✕
      </button>
      <nav className="app-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            {item.label}
            {item.gated && !hasFinanceiroAccess && <span className="sidebar-link-lock">🔒</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-status card">
        <div className="sidebar-status-title">Central de Monitoramento</div>
        <div className="sidebar-status-text">Conexão criptografada ativa com {unidade}.</div>
        <div className="sidebar-status-online">
          <span className="status-dot" /> 100% Online
        </div>
      </div>
    </aside>
  );
}
