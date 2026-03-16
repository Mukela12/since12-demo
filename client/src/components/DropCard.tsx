import type { Drop } from '@/data/types';
import CountdownTimer from './CountdownTimer';
import { Link } from 'react-router-dom';

interface DropCardProps {
  drop: Drop;
}

export default function DropCard({ drop }: DropCardProps) {
  const isSoldOut = drop.status === 'sold_out';

  return (
    <Link to={`/drop/${drop.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="card-brutal" style={{ overflow: 'hidden' }}>
        <div style={{ position: 'relative' }}>
          <img
            src={drop.imageUrl}
            alt={drop.title}
            style={{
              width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block',
              borderBottom: '3px solid #000',
              filter: isSoldOut ? 'grayscale(100%)' : 'none',
              opacity: isSoldOut ? 0.6 : 1,
            }}
          />
          {isSoldOut && (
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-12deg)' }}>
              <span className="brutal-badge brutal-badge--coral" style={{ fontSize: 14, padding: '6px 16px' }}>SOLD OUT</span>
            </div>
          )}
          {drop.status === 'live' && (
            <div style={{ position: 'absolute', top: 8, right: 8 }}>
              <span className="brutal-badge brutal-badge--coral">{drop.remainingQuantity} / {drop.totalQuantity} LEFT</span>
            </div>
          )}
        </div>
        <div style={{ padding: '12px 14px' }}>
          <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
            {drop.creator.name} · {drop.category}
          </div>
          <div className="font-instrument-serif" style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>
            {drop.title}
          </div>
          <div className="flex items-center justify-between">
            <span className="font-space-mono" style={{ fontSize: 16, fontWeight: 700 }}>
              ${drop.price}
            </span>
            {drop.status === 'upcoming' && <CountdownTimer targetDate={drop.dropTime} />}
            {isSoldOut && drop.soldOutDuration && (
              <span className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                SOLD OUT IN {drop.soldOutDuration}
              </span>
            )}
          </div>
          {drop.status === 'upcoming' && (
            <button
              className="btn-brutal btn-brutal--yellow"
              style={{ width: '100%', marginTop: 10, textAlign: 'center' }}
              onClick={(e) => e.preventDefault()}
            >
              NOTIFY ME
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
