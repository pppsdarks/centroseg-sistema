import MetricCard from '../common/MetricCard';
import AccessGate from '../common/AccessGate';
import { financeiroData } from '../../data/mockData';
import { useAuth } from '../../context/AuthContext';

const STATUS_CLASS = {
  Notificado: 'badge--warning',
  Cobrança: 'badge--danger',
};

export default function Financeiro() {
  const { hasFinanceiroAccess } = useAuth();
  const { kpis, faturamentoPorLinha, faturasEmAtraso } = financeiroData;

  if (!hasFinanceiroAccess) {
    return (
      <div>
        <div className="page-header">
          <div className="eyebrow">Financeiro</div>
          <h1>Resultados Financeiros &amp; Cobrança</h1>
        </div>
        <AccessGate
          title="Acesso Restrito"
          description="Os dados financeiros são visíveis apenas para o setor Financeiro e sócios. Insira o código de acesso para continuar."
        />
      </div>
    );
  }

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Financeiro</div>
        <h1>Resultados Financeiros &amp; Cobrança</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Receita Mensal" value={kpis.receita_mensal} percentage={kpis.receita_mensal_delta} />
        <MetricCard title="Despesas Totais" value={kpis.despesas_totais} percentage={kpis.despesas_totais_delta} trend="down" />
        <MetricCard title="Margem de Lucro" value={kpis.margem_lucro} percentage={kpis.margem_lucro_delta} />
        <MetricCard title="Inadimplência" value={kpis.inadimplencia} percentage={kpis.inadimplencia_delta} trend="down" />
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 className="section-title">Faturamento por Linha de Negócio</h3>
          <div className="progress-list">
            {faturamentoPorLinha.map((item) => (
              <div key={item.linha} className="progress-item">
                <div className="progress-item-top">
                  <span>{item.linha}</span>
                  <span>
                    R$ {item.valor}k ({item.percentual}%)
                  </span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${item.percentual}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="section-title">Faturas em Atraso (Crítico)</h3>
          <ul className="invoice-list">
            {faturasEmAtraso.map((item) => (
              <li key={item.cliente} className="invoice-item">
                <div>
                  <div className="invoice-item-name">{item.cliente}</div>
                  <div className="invoice-item-atraso">Atraso: {item.atraso}</div>
                </div>
                <div className="invoice-item-right">
                  <div className="invoice-item-valor">{item.valor}</div>
                  <span className={`badge ${STATUS_CLASS[item.status] || 'badge--neutral'}`}>{item.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
