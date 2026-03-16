interface StatBlockProps {
  label: string;
  value: string | number;
  accent?: boolean;
}

export default function StatBlock({ label, value, accent }: StatBlockProps) {
  return (
    <div
      className="card-brutal"
      style={{
        padding: '16px 20px',
        background: accent ? 'var(--accent-coral)' : 'var(--bg-surface)',
        color: accent ? '#fff' : 'var(--text-primary)',
      }}
    >
      <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: accent ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', marginBottom: 6 }}>
        {label}
      </div>
      <div className="font-space-mono" style={{ fontSize: 32, fontWeight: 700, lineHeight: 1 }}>
        {typeof value === 'number' ? value.toLocaleString() : value}
      </div>
    </div>
  );
}
