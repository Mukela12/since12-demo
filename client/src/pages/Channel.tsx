import { useParams } from 'react-router-dom';
import { getCreator, creators } from '@/data/creators';
import { drops, soldOutDrops } from '@/data/drops';
import { streams, pastStreams } from '@/data/streams';
import StatBlock from '@/components/StatBlock';
import DropCard from '@/components/DropCard';
import { Link } from 'react-router-dom';

export default function Channel() {
  const { creatorId } = useParams();
  const creator = getCreator(creatorId ?? creators[2].id);

  const creatorDrops = [...drops, ...soldOutDrops].filter(d => d.creatorId === creator.id);
  const creatorStreams = [...streams, ...pastStreams].filter(s => s.creatorId === creator.id);

  return (
    <div>
      {/* Banner */}
      <div style={{ position: 'relative', marginBottom: 32 }}>
        <div className="card-brutal" style={{ overflow: 'hidden', padding: 0 }}>
          <img
            src={creator.banner}
            alt={creator.name}
            style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
            padding: '40px 24px 20px',
          }}>
            <div className="flex items-end gap-4">
              <img
                src={creator.avatar}
                alt={creator.name}
                style={{
                  width: 72, height: 72, objectFit: 'cover',
                  border: '3px solid #fff', marginBottom: -8,
                }}
              />
              <div style={{ flex: 1 }}>
                <h1 className="font-instrument-serif" style={{ fontSize: 32, color: '#fff', marginBottom: 2, lineHeight: 1 }}>
                  {creator.name}
                  {creator.isVerified && <span style={{ fontSize: 16, marginLeft: 8 }}>&#10003;</span>}
                </h1>
                <div className="font-space-mono" style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)' }}>
                  {creator.handle} · "{creator.tagline}"
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn-brutal btn-brutal--yellow" style={{ fontSize: 10, padding: '8px 16px' }}>FOLLOW</button>
                <button className="btn-brutal btn-brutal--black" style={{ fontSize: 10, padding: '8px 16px' }}>NOTIFY</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="font-recursive" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 24 }}>
        {creator.bio}
      </p>

      {/* Socials */}
      <div className="flex gap-2" style={{ marginBottom: 32 }}>
        {creator.socials.map(social => (
          <span key={social.platform} className="sticker sticker--rot-pos" style={{ cursor: 'pointer' }}>
            {social.platform}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
        <StatBlock label="Followers" value={creator.followers} accent />
        <StatBlock label="Drops" value={creator.totalDrops} />
        <StatBlock label="Streams" value={creator.totalStreams} />
        <StatBlock label="Sold Out" value={creator.soldOutCount} />
      </div>

      {/* Drops */}
      {creatorDrops.length > 0 && (
        <section style={{ marginBottom: 40 }}>
          <div className="section-label">DROPS</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {creatorDrops.map(drop => (
              <DropCard key={drop.id} drop={drop} />
            ))}
          </div>
        </section>
      )}

      {/* Streams */}
      {creatorStreams.length > 0 && (
        <section style={{ marginBottom: 40 }}>
          <div className="section-label">STREAMS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {creatorStreams.map((stream, i) => (
              <Link
                key={stream.id}
                to={`/watch/${stream.id}`}
                style={{
                  textDecoration: 'none', color: 'inherit',
                  display: 'flex', alignItems: 'center', gap: 16,
                  padding: '12px 16px',
                  borderBottom: '1px solid var(--border-light)',
                  background: i % 2 === 0 ? 'transparent' : 'var(--bg-elevated)',
                }}
              >
                <img
                  src={stream.thumbnailUrl}
                  alt={stream.title}
                  style={{ width: 80, height: 45, objectFit: 'cover', border: '2px solid #000', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div className="font-instrument-serif" style={{ fontSize: 14 }}>{stream.title}</div>
                  <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {stream.category} · {stream.peakViewers.toLocaleString()} peak viewers
                  </div>
                </div>
                <span className={`brutal-badge ${stream.status === 'live' ? 'brutal-badge--coral' : stream.status === 'scheduled' ? 'brutal-badge--yellow' : ''}`}>
                  {stream.status.toUpperCase()}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  );
}
