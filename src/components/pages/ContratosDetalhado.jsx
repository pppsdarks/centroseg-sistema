import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import MetricCard from '../common/MetricCard';
import Table from '../common/Table';
import { contratosData } from '../../data/mockData';

const TYPE_COLORS = ['#22c55e', '#9ca3af', '#fbbf24', '#6b7280'];

const COLUMNS = [
  { key: 'cliente', label: 'Cliente' },
  { key: 'contrato', label: 'Contrato' },
  { key: 'servico', label: 'Serviço' },
  { key: 'valor', label: 'Valor', align: 'right' },
  { key: 'expiracao', label: 'Expiração', align: 'right' },
  { key: 'status', label: 'Status', status: true, align: 'right' },
];

function riskColor(risk) {
  if (risk >= 80) return 'var(--color-danger)';
  if (risk >= 60) return 'var(--color-warning)';
  return 'var(--color-primary)';
}

export default function ContratosDetalhado() {
  const { kpis, distribuicaoPorTipo, contratosAtivos, churnRisk } = contratosData;
  const total = contratosAtivos.length ? kpis.contratos_ativos : '';

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Contratos e Clientes</div>
        <h1>Gestão de Contratos &amp; Ativos</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Contratos Ativos" value={kpis.contratos_ativos} percentage={kpis.contratos_ativos_delta} />
        <MetricCard title="Vencendo em 30 dias" value={kpis.vencendo_30_dias} note="Necessita Renovação Urgente" />
        <MetricCard title="Taxa de Renovação" value={kpis.taxa_renovacao} percentage={kpis.taxa_renovacao_delta} />
        <MetricCard title="Churn Mensal" value={kpis.churn_mensal} percentage={kpis.churn_mensal_delta} trend="down" />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '0.8fr 1.6fr', marginBottom: 20 }}>
        <div className="card">
          <h3 className="section-title">Distribuição por Tipo</h3>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <ResponsiveContainer width={160} height={160}>
              <PieChart>
                <Pie data={distribuicaoPorTipo} dataKey="percentual" nameKey="tipo" innerRadius={48} outerRadius={72}>
                  {distribuicaoPorTipo.map((entry, i) => (
                    <Cell key={entry.tipo} fill={TYPE_COLORS[i % TYPE_COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="donut-center">
              <div className="donut-center-value">{total}</div>
              <div className="donut-center-label">Contratos</div>
            </div>
          </div>
          <ul className="legend-list" style={{ marginTop: 16 }}>
            {distribuicaoPorTipo.map((entry, i) => (
              <li key={entry.tipo} style={{ justifyContent: 'space-between' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="legend-dot" style={{ background: TYPE_COLORS[i % TYPE_COLORS.length] }} />
                  {entry.tipo}
                </span>
                <span>{entry.percentual}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ padding: 0 }}>
          <h3 className="section-title" style={{ padding: '20px 20px 0' }}>
            Contratos Ativos e Alertas
          </h3>
          <Table columns={COLUMNS} data={contratosAtivos} />
        </div>
      </div>

      <div className="card">
        <h3 className="section-title">Alerta de Churn Risk</h3>
        <ul className="churn-list">
          {churnRisk.map((item) => (
            <li key={item.cliente} className="churn-item">
              <div>
                <div className="churn-item-name">{item.cliente}</div>
                <div className="churn-item-motivo">{item.motivo}</div>
              </div>
              <span className="churn-badge" style={{ color: riskColor(item.risco), borderColor: riskColor(item.risco) }}>
                {item.risco}% Risco
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
