import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function AccessGate({ title, description }) {
  const { unlockRole } = useAuth();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!unlockRole(code)) {
      setError('Código inválido. Verifique com a diretoria ou o setor financeiro.');
    }
  }

  return (
    <div className="access-gate card">
      <div className="access-gate-icon">🔒</div>
      <h2>{title}</h2>
      <p>{description}</p>
      <form className="access-gate-form" onSubmit={handleSubmit}>
        <input
          type="password"
          className="login-input"
          placeholder="Código de acesso"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError('');
          }}
        />
        <button type="submit" className="btn btn-primary">
          Desbloquear
        </button>
      </form>
      {error && <div className="login-error">{error}</div>}
    </div>
  );
}
