import { MapContainer, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const STATUS_COLOR = {
  Ativo: '#22c55e',
  Inativo: '#6b7280',
  Risco: '#ef4444',
};

export default function ClientMap({ pontos, height = 360 }) {
  const center = [-25.28, -49.72];

  return (
    <div className="client-map" style={{ height }}>
      <MapContainer center={center} zoom={9} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap &copy; CARTO'
        />
        {pontos.map((p) => (
          <CircleMarker
            key={p.nome}
            center={[p.lat, p.lng]}
            radius={7}
            pathOptions={{
              color: STATUS_COLOR[p.status] || '#9ca3af',
              fillColor: STATUS_COLOR[p.status] || '#9ca3af',
              fillOpacity: 0.85,
              weight: 2,
            }}
          >
            <Tooltip direction="top" offset={[0, -6]}>
              <strong>{p.nome}</strong>
              <br />
              {p.cidade} — {p.status}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
