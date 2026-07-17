import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  GridIcon,
  TrendingUpIcon,
  MegaphoneIcon,
  FileTextIcon,
  ShieldIcon,
  DollarIcon,
  BarChartIcon,
  LockIcon,
} from '../common/icons';

const NAV_ITEMS = [
  { to: '/dashboard', label: 'Visão Geral', icon: GridIcon },
  { to: '/comercial', label: 'Comercial', icon: TrendingUpIcon },
  { to: '/marketing', label: 'Marketing', icon: MegaphoneIcon },
  { to: '/clientes', label: 'Clientes e Contratos', icon: FileTextIcon },
  { to: '/operacional', label: 'Operacional', icon: ShieldIcon },
  { to: '/financeiro', label: 'Financeiro', icon: DollarIcon, gated: true },
  { to: '/relatorios', label: 'Relatórios', icon: BarChartIcon },
];

export default function Sidebar({ open, onClose }) {
  const { unidade, hasFinanceiroAccess } = useAuth();

  return (
    <aside className={`app-sidebar ${open ? 'app-sidebar--open' : ''}`}>
      <button type="button" className="sidebar-close-btn" onClick={onClose} aria-label="Fechar menu">
        ✕
      </button>
      <nav className="app-sidebar-nav">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link--active' : ''}`}
            >
              <span className="sidebar-link-icon">
                <Icon />
              </span>
              {item.label}
              {item.gated && !hasFinanceiroAccess && (
                <span className="sidebar-link-lock">
                  <LockIcon />
                </span>
              )}
            </NavLink>
          );
        })}
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
