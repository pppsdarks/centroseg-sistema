import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const { login, setUnidade } = useAuth();
  const navigate = useNavigate();

  const [selectedUnidade, setSelectedUnidade] = useState('Ponta Grossa');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Informe o e-mail corporativo.');
      return;
    }
    if (!senha) {
      setError('Informe a senha.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUnidade(selectedUnidade);
      login();
      navigate('/dashboard');
    }, 600);
  }

  return (
    <div className="login-screen">
      <div className="login-hero">
        <div className="login-hero-top">
          <img src={logo} alt="CentroSeg" height={32} className="login-hero-logo" />
          <div className="login-hero-status">
            <span className="status-dot" /> SISTEMA ONLINE
          </div>
        </div>
        <h1>Gestão Integrada de Segurança Patrimonial</h1>
        <p>
          Monitoramento avançado, telemetria em tempo real e controle operacional completo das
          unidades regionais em uma única plataforma blindada.
        </p>
        <div className="login-hero-stats">
          <div>
            <div className="login-hero-stat-value">24/7</div>
            <div className="login-hero-stat-label">Monitoramento Ativo</div>
          </div>
          <div>
            <div className="login-hero-stat-value">99.9%</div>
            <div className="login-hero-stat-label">SLA de Conectividade</div>
          </div>
        </div>
        <div className="login-hero-footer">Protocolo de Conexão Criptografada AES-256 Ativo</div>
      </div>

      <div className="login-form-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Acesse sua conta</h2>
          <p className="login-form-subtitle">Insira suas credenciais corporativas autorizadas.</p>

          <label className="login-label">Selecione a unidade operacional</label>
          <div className="login-unit-options">
            {['Ponta Grossa', 'Curitiba'].map((u) => (
              <button
                type="button"
                key={u}
                className={`login-unit-card ${selectedUnidade === u ? 'login-unit-card--active' : ''}`}
                onClick={() => setSelectedUnidade(u)}
              >
                <span>{u}</span>
                <span className="login-unit-card-sub">
                  {u === 'Ponta Grossa' ? 'Unidade Matriz' : 'Unidade Adicional'}
                </span>
              </button>
            ))}
          </div>

          <label className="login-label" htmlFor="email">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="login-label" htmlFor="senha">
            Senha
          </label>
          <div className="login-password-field">
            <input
              id="senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              className="login-input"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button
              type="button"
              className="login-password-toggle"
              onClick={() => setShowPassword((v) => !v)}
              aria-label="Mostrar senha"
            >
              👁
            </button>
          </div>
          <a href="#" className="login-forgot">
            Esqueceu a senha?
          </a>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="login-submit" disabled={loading}>
            {loading ? 'Autenticando...' : 'Entrar no Sistema'}
          </button>

          <div className="login-support">
            <div>CENTRAL DE MONITORAMENTO 24H</div>
            <div>Suporte Operacional: (41) 3321-4500</div>
          </div>
        </form>
      </div>
    </div>
  );
}
