import logo from '../../assets/logo.svg';
import { unidades } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

const ROLE_LABEL = {
  padrao: 'OPERACIONAL',
  financeiro: 'FINANCEIRO',
  socio: 'SÓCIO',
};

export default function Header({ onMenuClick }) {
  const { unidade, setUnidade, user, role } = useAuth();

  return (
    <header className="app-header">
      <div className="app-header-brand">
        <button type="button" className="menu-btn" onClick={onMenuClick} aria-label="Abrir menu">
          ☰
        </button>
        <img src={logo} alt="CentroSeg" height={22} />
        <span className="app-header-badge">{ROLE_LABEL[role]}</span>
      </div>

      <div className="app-header-units-wrap">
        <span className="app-header-units-label">Unidade</span>
        <div className="app-header-units">
          {unidades.map((u) => (
            <button
              key={u}
              className={`unit-pill ${unidade === u ? 'unit-pill--active' : ''}`}
              onClick={() => setUnidade(u)}
              title={u === 'Consolidado' ? 'Visão combinada de Curitiba + Ponta Grossa' : `Filtrar dados só de ${u}`}
            >
              {u === 'Consolidado' ? 'Consolidado (ambas)' : u}
            </button>
          ))}
        </div>
      </div>

      <div className="app-header-user">
        <button className="icon-btn" aria-label="Notificações">
          🔔
        </button>
        <div className="app-header-avatar" aria-hidden="true">
          {user.nome.charAt(0)}
        </div>
        <div className="app-header-user-info">
          <div className="app-header-user-name">{user.nome}</div>
          <div className="app-header-user-role">{user.cargo}</div>
        </div>
      </div>
    </header>
  );
}
