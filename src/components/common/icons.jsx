const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function GridIcon() {
  return (
    <svg {...base}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function TrendingUpIcon() {
  return (
    <svg {...base}>
      <polyline points="3 17 9 11 13 15 21 6" />
      <polyline points="14 6 21 6 21 13" />
    </svg>
  );
}

export function MegaphoneIcon() {
  return (
    <svg {...base}>
      <path d="M3 11v2a2 2 0 0 0 2 2h1l3 5V4l-3 5H5a2 2 0 0 0-2 2Z" />
      <path d="M13 8a4 4 0 0 1 0 8" />
      <path d="M17 5a8 8 0 0 1 0 14" />
    </svg>
  );
}

export function FileTextIcon() {
  return (
    <svg {...base}>
      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v5h5" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...base}>
      <path d="M12 3 4 6v6c0 5 3.4 7.9 8 9 4.6-1.1 8-4 8-9V6l-8-3Z" />
    </svg>
  );
}

export function DollarIcon() {
  return (
    <svg {...base}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.2c0 1.9 1.8 2.6 5 3.3s5 1.5 5 3.4c0 1.9-2.2 3.2-5 3.2s-5-1.6-5-3.5" />
    </svg>
  );
}

export function BarChartIcon() {
  return (
    <svg {...base}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="5" y="13" width="3" height="7" />
      <rect x="10.5" y="9" width="3" height="11" />
      <rect x="16" y="5" width="3" height="15" />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
