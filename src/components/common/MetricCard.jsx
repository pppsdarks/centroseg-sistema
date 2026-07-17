export default function MetricCard({ title, value, percentage, note, trend }) {
  const resolvedTrend = trend || (percentage?.startsWith('-') ? 'down' : percentage ? 'up' : null);
  const deltaClass = resolvedTrend === 'down' ? 'metric-card-badge--down' : 'metric-card-badge--up';

  return (
    <div className="card metric-card">
      <div className="metric-card-top">
        <span className="metric-card-title">{title}</span>
        {percentage && <span className={`metric-card-badge ${deltaClass}`}>{percentage}</span>}
      </div>
      <div className="metric-card-value">{value}</div>
      {note && <div className="metric-card-note">{note}</div>}
    </div>
  );
}
