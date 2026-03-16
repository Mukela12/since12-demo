import type { Creator } from '@/data/types';
import { Link } from 'react-router-dom';

interface CreatorCardProps {
  creator: Creator;
  showFollow?: boolean;
}

export default function CreatorCard({ creator, showFollow = true }: CreatorCardProps) {
  return (
    <div className="flex items-center gap-3">
      <Link to={`/channel/${creator.id}`}>
        <img
          src={creator.avatar}
          alt={creator.name}
          style={{
            width: 40, height: 40, objectFit: 'cover',
            border: '2px solid #000',
          }}
        />
      </Link>
      <div style={{ flex: 1 }}>
        <Link to={`/channel/${creator.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <span className="font-instrument-serif" style={{ fontSize: 16 }}>
            {creator.name}
          </span>
          {creator.isVerified && (
            <span style={{ marginLeft: 4, fontSize: 12 }} title="Verified">&#10003;</span>
          )}
        </Link>
        <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          {creator.handle}
        </div>
      </div>
      {showFollow && (
        <button className="btn-brutal btn-brutal--yellow" style={{ padding: '6px 14px', fontSize: 10 }}>
          FOLLOW
        </button>
      )}
    </div>
  );
}
