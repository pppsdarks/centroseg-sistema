import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Visão Geral', icon: '⊞' },
  { to: '/comercial', label: 'Comercial', icon: '📈' },
  { to: '/clientes', label: 'Clientes e Contratos', icon: '📄' },
  { to: '/operacional', label: 'Operacional', icon: '🛡' },
  { to: '/financeiro', label: 'Financeiro', icon: '$' },
  { to: '/relatorios', label: 'Relatórios', icon: '📊' },
];

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav className="app-sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-status card">
        <div className="sidebar-status-title">Central de Monitoramento</div>
        <div className="sidebar-status-text">Conexão criptografada ativa com Curitiba.</div>
        <div className="sidebar-status-online">
          <span className="status-dot" /> 100% Online
        </div>
      </div>
    </aside>
  );
}
