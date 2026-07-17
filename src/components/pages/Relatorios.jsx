import { relatoriosData } from '../../data/mockData';

export default function Relatorios() {
  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Relatórios</div>
        <h1>Central de Relatórios &amp; Business Intelligence</h1>
      </div>

      <div className="toolbar">
        <div className="toolbar-actions">
          <button className="btn btn-secondary">Período: Últimos 30 dias</button>
          <button className="btn btn-secondary">Formato: Todos</button>
        </div>
        <button className="btn btn-primary">Configurar Agendamentos</button>
      </div>

      <div className="grid grid-3">
        {relatoriosData.map((relatorio) => (
          <div key={relatorio.id} className="card report-card">
            <h3 className="report-card-title">{relatorio.titulo}</h3>
            <p className="report-card-desc">{relatorio.descricao}</p>
            <div className="report-card-formats">{relatorio.formatos.join(', ')}</div>
            <button className="btn btn-primary report-card-btn">Gerar</button>
          </div>
        ))}
      </div>
    </div>
  );
}
