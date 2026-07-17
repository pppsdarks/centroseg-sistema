const STATUS_CLASS = {
  Ativo: 'badge--success',
  Inativo: 'badge--danger',
  Vencido: 'badge--danger',
  Vencendo: 'badge--warning',
  Cancelado: 'badge--danger',
  Expired: 'badge--danger',
};

function StatusBadge({ value }) {
  const cls = STATUS_CLASS[value] || 'badge--neutral';
  return <span className={`badge ${cls}`}>{value}</span>;
}

export default function Table({ columns, data, actions }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={{ textAlign: col.align || 'left' }}>
                {col.label}
              </th>
            ))}
            {actions && <th />}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row.id ?? i}>
              {columns.map((col) => (
                <td key={col.key} style={{ textAlign: col.align || 'left' }}>
                  {col.status ? <StatusBadge value={row[col.key]} /> : row[col.key]}
                </td>
              ))}
              {actions && <td className="table-actions">{actions(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
