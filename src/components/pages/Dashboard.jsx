import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import MetricCard from '../common/MetricCard';
import { dashboardData, graficosData } from '../../data/mockData';

const CATEGORY_COLORS = ['#22c55e', '#fbbf24', '#ef4444'];

export default function Dashboard() {
  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Visão Geral</div>
        <h1>Painel Executivo e Performance</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Faturamento Mensal" value={`R$ ${dashboardData.faturamento_mensal}`} percentage={dashboardData.percentual_faturamento} />
        <MetricCard title="Clientes Ativos" value={dashboardData.clientes_ativos} percentage={dashboardData.percentual_clientes} />
        <MetricCard title="Chamados em Aberto" value={dashboardData.chamados_abertos} percentage={dashboardData.percentual_chamados} />
        <MetricCard title="NPS Operacional" value={dashboardData.nps} percentage={dashboardData.percentual_nps} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.6fr 1fr' }}>
        <div className="card">
          <h3 className="section-title">Crescimento de Receita (Semestre)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={graficosData.crescimentoReceita}>
              <XAxis dataKey="mes" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip
                contentStyle={{ background: '#1e293b', border: '1px solid #263248', borderRadius: 8 }}
                labelStyle={{ color: '#fff' }}
              />
              <Line type="monotone" dataKey="valor" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: '#22c55e' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div className="card">
            <h3 className="section-title">Distribuição por Categoria</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <ResponsiveContainer width={120} height={120}>
                <PieChart>
                  <Pie
                    data={graficosData.distribuicaoCategoria}
                    dataKey="percentual"
                    nameKey="categoria"
                    innerRadius={35}
                    outerRadius={55}
                  >
                    {graficosData.distribuicaoCategoria.map((entry, i) => (
                      <Cell key={entry.categoria} fill={CATEGORY_COLORS[i % CATEGORY_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <ul className="legend-list">
                {graficosData.distribuicaoCategoria.map((entry, i) => (
                  <li key={entry.categoria}>
                    <span className="legend-dot" style={{ background: CATEGORY_COLORS[i % CATEGORY_COLORS.length] }} />
                    {entry.categoria} ({entry.percentual}%)
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card">
            <h3 className="section-title">Atividade Recente</h3>
            <ul className="activity-list">
              {graficosData.atividadeRecente.map((item) => (
                <li key={item.texto}>
                  <span className={`activity-dot activity-dot--${item.tipo}`} />
                  {item.texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
