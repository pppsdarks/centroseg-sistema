import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import MetricCard from '../common/MetricCard';
import Table from '../common/Table';
import ClientMap from '../common/ClientMap';
import { marketingData } from '../../data/mockData';

const CHANNEL_COLORS = ['#22c55e', '#a3a3a3', '#6b7280', '#fbbf24', '#404040'];

const CAMPAIGN_COLUMNS = [
  { key: 'nome', label: 'Campanha' },
  { key: 'plataforma', label: 'Plataforma' },
  { key: 'investimento', label: 'Investimento' },
  { key: 'cliques', label: 'Cliques' },
  { key: 'conversoes', label: 'Conversões' },
  { key: 'cpl', label: 'CPL' },
  { key: 'status', label: 'Status', status: true },
];

export default function Marketing() {
  const { kpis, sessoesPorSemana, origemTrafego, campanhas, eventosGTM, mapaClientes } = marketingData;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Marketing</div>
        <h1>Aquisição, Campanhas &amp; Território de Clientes</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Sessões (GTM/GA)" value={kpis.sessoes} percentage={kpis.sessoes_delta} />
        <MetricCard title="Conversões" value={kpis.conversoes} percentage={kpis.conversoes_delta} />
        <MetricCard title="Investimento Total" value={kpis.investimento_total} percentage={kpis.investimento_delta} />
        <MetricCard title="ROAS" value={kpis.roas} percentage={kpis.roas_delta} />
      </div>

      <div className="grid" style={{ gridTemplateColumns: '1.6fr 1fr', marginBottom: 20 }}>
        <div className="card">
          <h3 className="section-title">Sessões por Semana (Google Tag Manager)</h3>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={sessoesPorSemana}>
              <XAxis dataKey="semana" stroke="#737373" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: '#212121', border: '1px solid #2c2c2c', borderRadius: 8 }} />
              <Line type="monotone" dataKey="sessoes" stroke="#22c55e" strokeWidth={3} dot={{ r: 4, fill: '#22c55e' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="section-title">Origem do Tráfego</h3>
          <ul className="legend-list">
            {origemTrafego.map((item, i) => (
              <li key={item.canal}>
                <span className="legend-dot" style={{ background: CHANNEL_COLORS[i % CHANNEL_COLORS.length] }} />
                {item.canal} ({item.percentual}%)
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-2" style={{ marginBottom: 20 }}>
        <div className="card">
          <h3 className="section-title">Eventos Rastreados (GTM)</h3>
          <ul className="invoice-list">
            {eventosGTM.map((item) => (
              <li key={item.evento} className="invoice-item">
                <div className="invoice-item-name">{item.evento}</div>
                <div className="invoice-item-right">
                  <div className="metric-card-value" style={{ fontSize: 18 }}>{item.contagem}</div>
                  <span className="metric-card-badge metric-card-badge--up">{item.variacao}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="section-title">Investimento por Campanha</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={campanhas} layout="vertical" margin={{ left: 24 }}>
              <XAxis type="number" hide />
              <YAxis
                type="category"
                dataKey="plataforma"
                stroke="#737373"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                width={90}
              />
              <Tooltip contentStyle={{ background: '#212121', border: '1px solid #2c2c2c', borderRadius: 8 }} />
              <Bar dataKey="conversoes" fill="#22c55e" radius={[0, 6, 6, 0]} barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 20 }}>
        <h3 className="section-title">Campanhas Ativas (Meta &amp; Google Ads)</h3>
        <Table columns={CAMPAIGN_COLUMNS} data={campanhas} />
      </div>

      <div className="card">
        <h3 className="section-title">Mapa de Clientes</h3>
        <ClientMap pontos={mapaClientes} />
        <ul className="legend-list" style={{ marginTop: 14, flexDirection: 'row', gap: 20 }}>
          <li><span className="legend-dot" style={{ background: '#22c55e' }} /> Ativo</li>
          <li><span className="legend-dot" style={{ background: '#6b7280' }} /> Inativo</li>
          <li><span className="legend-dot" style={{ background: '#ef4444' }} /> Risco</li>
        </ul>
      </div>
    </div>
  );
}
