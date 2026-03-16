import { drops, soldOutDrops } from '@/data/drops';
import DropCard from '@/components/DropCard';

export default function Drops() {
  return (
    <div>
      <h1 className="font-instrument-serif" style={{ fontSize: 28, marginBottom: 8 }}>
        Drops
      </h1>
      <p className="font-space-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 32 }}>
        LIMITED EDITION — ONCE THEY'RE GONE, THEY'RE GONE
      </p>

      {/* Active / Upcoming */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">LIVE & UPCOMING</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {drops.map(drop => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </section>

      {/* Sold Out */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">SOLD OUT</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {soldOutDrops.map(drop => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </section>
    </div>
  );
}
