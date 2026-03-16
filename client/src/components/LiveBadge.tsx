export default function LiveBadge() {
  return (
    <div className="flex items-center gap-1.5" style={{ padding: '4px 10px', background: 'var(--accent-coral)', border: '2px solid var(--accent-coral)' }}>
      <span style={{
        width: 8, height: 8, borderRadius: '50%', background: '#fff',
        animation: 'pulse-live 1.5s ease-in-out infinite',
        display: 'inline-block',
      }} />
      <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        LIVE
      </span>
    </div>
  );
}
