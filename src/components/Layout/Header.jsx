import logo from '../../assets/logo.svg';
import { unidades } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

export default function Header() {
  const { unidade, setUnidade, user } = useAuth();

  return (
    <header className="app-header">
      <div className="app-header-brand">
        <img src={logo} alt="CentroSeg" height={22} />
        <span className="app-header-badge">OPERACIONAL</span>
      </div>

      <div className="app-header-units">
        {unidades.map((u) => (
          <button
            key={u}
            className={`unit-pill ${unidade === u ? 'unit-pill--active' : ''}`}
            onClick={() => setUnidade(u)}
          >
            {u}
          </button>
        ))}
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
