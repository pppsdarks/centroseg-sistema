import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import MetricCard from '../common/MetricCard';
import { comercialData } from '../../data/mockData';

export default function Comercial() {
  const { kpis, funil, comparativoRegional, ranking } = comercialData;
  const maxFunil = funil[0].valor;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Comercial</div>
        <h1>Funil de Vendas &amp; Performance</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Taxa de Conversão" value={kpis.taxa_conversao} percentage={kpis.taxa_conversao_delta} />
        <MetricCard title="Ticket Médio" value={kpis.ticket_medio} percentage={kpis.ticket_medio_delta} />
        <MetricCard title="Meta Mensal" value={kpis.meta_mensal} note={`Progresso da meta ${kpis.meta_progresso}%`} />
        <MetricCard title="Novos Leads Mês" value={kpis.novos_leads} percentage={kpis.novos_leads_delta} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '0.9fr 1.4fr', marginBottom: 20 }}>
        <div className="card">
          <h3 className="section-title">Funil de Vendas YTD</h3>
          <div className="funnel">
            {funil.map((step) => (
              <div key={step.etapa} className="funnel-step" style={{ width: `${30 + (step.valor / maxFunil) * 70}%` }}>
                <div className="funnel-step-label">{step.etapa}</div>
                <div className="funnel-step-value">{step.valor}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="section-title">Curitiba vs Ponta Grossa (Vendas Jan-Jun)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={comparativoRegional}>
              <XAxis dataKey="mes" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: '#212121', border: '1px solid #2c2c2c', borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey="curitiba" name="Curitiba" fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="pontaGrossa" name="Ponta Grossa" fill="#475569" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <h3 className="section-title" style={{ padding: '20px 20px 0' }}>
          Ranking de Vendedores
        </h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>POS</th>
              <th>NOME</th>
              <th>FILIAL</th>
              <th style={{ textAlign: 'right' }}>FECHAMENTOS</th>
              <th style={{ textAlign: 'right' }}>RECEITA</th>
              <th style={{ textAlign: 'right' }}>TAXA CONV.</th>
            </tr>
          </thead>
          <tbody>
            {ranking.map((r) => (
              <tr key={r.pos}>
                <td>{r.pos}º</td>
                <td>{r.nome}</td>
                <td>{r.filial}</td>
                <td style={{ textAlign: 'right' }}>{r.fechamentos}</td>
                <td style={{ textAlign: 'right', color: 'var(--color-primary)' }}>{r.receita}</td>
                <td style={{ textAlign: 'right' }}>{r.taxa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
