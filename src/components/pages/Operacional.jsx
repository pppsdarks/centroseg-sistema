import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';
import MetricCard from '../common/MetricCard';
import Alert from '../common/Alert';
import { operacionalData } from '../../data/mockData';

const NIVEL_TO_ALERT_TYPE = {
  Alta: 'error',
  Média: 'warning',
  Informativo: 'success',
};

export default function Operacional() {
  const { kpis, incidenciasPorDia, alertasCriticos } = operacionalData;

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Operacional</div>
        <h1>Central de Monitoramento e SLA</h1>
      </div>

      <div className="grid grid-4" style={{ marginBottom: 20 }}>
        <MetricCard title="Chamados Ativos" value={kpis.chamados_ativos} note={kpis.chamados_ativos_nota} />
        <MetricCard title="Tempo Médio Resposta" value={kpis.tempo_medio_resposta} percentage={kpis.tempo_medio_resposta_delta} trend="down" />
        <MetricCard title="SLA Cumprido (Mês)" value={kpis.sla_cumprido} percentage={kpis.sla_cumprido_delta} />
        <MetricCard title="Utilização de Equipe" value={kpis.utilizacao_equipe} />
      </div>

      <div className="grid grid-2">
        <div className="card">
          <h3 className="section-title">Incidências por Dia da Semana</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={incidenciasPorDia}>
              <XAxis dataKey="dia" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip contentStyle={{ background: '#1e293b', border: '1px solid #263248', borderRadius: 8 }} />
              <Bar dataKey="valor" radius={[4, 4, 0, 0]}>
                {incidenciasPorDia.map((entry) => (
                  <Cell key={entry.dia} fill="#22c55e" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="section-title">Alertas Críticos Ativos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {alertasCriticos.map((alerta) => (
              <Alert
                key={alerta.local}
                type={NIVEL_TO_ALERT_TYPE[alerta.nivel]}
                title={alerta.local}
                message={alerta.descricao}
                timestamp={alerta.tempo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
