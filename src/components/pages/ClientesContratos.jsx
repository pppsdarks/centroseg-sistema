import { useMemo, useState } from 'react';
import MetricCard from '../common/MetricCard';
import Table from '../common/Table';
import { clientesData, clientesResumo } from '../../data/mockData';

const COLUMNS = [
  { key: 'razao_social', label: 'Razão Social' },
  { key: 'cnpj', label: 'CNPJ' },
  { key: 'servico', label: 'Serviço Contratado' },
  { key: 'status', label: 'Status', status: true },
  { key: 'valor_mensal', label: 'Valor Mensal', align: 'right' },
  { key: 'renovacao', label: 'Renovação', align: 'right' },
];

export default function ClientesContratos() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return clientesData;
    return clientesData.filter(
      (c) =>
        c.razao_social.toLowerCase().includes(term) ||
        c.cnpj.toLowerCase().includes(term) ||
        c.servico.toLowerCase().includes(term)
    );
  }, [search]);

  return (
    <div>
      <div className="page-header">
        <div className="eyebrow">Clientes e Contratos</div>
        <h1>Gestão de Carteira &amp; Clientes</h1>
      </div>

      <div className="grid grid-3" style={{ marginBottom: 20 }}>
        <MetricCard title="Contratos Ativos" value={clientesResumo.contratos_ativos} note={clientesResumo.contratos_ativos_delta} />
        <MetricCard title="Valor Total Carteira" value={clientesResumo.valor_carteira} />
        <MetricCard title="Novos Clientes YTD" value={clientesResumo.novos_clientes_ytd} percentage={clientesResumo.novos_clientes_delta} />
      </div>

      <div className="toolbar">
        <input
          className="search-input"
          placeholder="Buscar cliente, CNPJ ou contrato..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="toolbar-actions">
          <button className="btn btn-primary">+ Adicionar Cliente</button>
          <button className="btn btn-secondary">Exportar CSV</button>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <Table columns={COLUMNS} data={filtered} />
      </div>
    </div>
  );
}
