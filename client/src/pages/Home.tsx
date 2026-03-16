import { getLiveStream, getScheduledStreams } from '@/data/streams';
import { drops, soldOutDrops } from '@/data/drops';
import StreamPlayer from '@/components/StreamPlayer';
import CreatorCard from '@/components/CreatorCard';
import DropCard from '@/components/DropCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const liveStream = getLiveStream();
  const scheduled = getScheduledStreams();
  const allDrops = [...drops, ...soldOutDrops.slice(0, 2)];

  return (
    <div>
      {/* Featured Stream */}
      {liveStream && (
        <section style={{ marginBottom: 40 }}>
          <Link to={`/watch/${liveStream.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <StreamPlayer
              playbackId={liveStream.playbackId}
              title={liveStream.title}
              isLive
              viewerCount={liveStream.viewerCount}
            />
          </Link>
          <div style={{ marginTop: 16, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
            <div style={{ flex: 1 }}>
              <Link to={`/watch/${liveStream.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="font-instrument-serif" style={{ fontSize: 24, marginBottom: 8 }}>
                  {liveStream.title}
                </h2>
              </Link>
              <CreatorCard creator={liveStream.creator} />
            </div>
            <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
              <span className="sticker">{liveStream.category}</span>
              {liveStream.tags.map(tag => (
                <span key={tag} className="sticker sticker--rot-pos" style={{ background: 'var(--bg-elevated)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dropping Soon */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">DROPPING SOON</div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {allDrops.map(drop => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">UPCOMING SCHEDULE</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {scheduled.map((stream, i) => (
            <Link
              key={stream.id}
              to={`/watch/${stream.id}`}
              style={{
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '14px 16px',
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
                <div className="font-instrument-serif" style={{ fontSize: 15, marginBottom: 2 }}>
                  {stream.title}
                </div>
                <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  {stream.creator.name} · {stream.category}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div className="font-space-mono" style={{ fontSize: 11, fontWeight: 700 }}>
                  {new Date(stream.scheduledAt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </div>
                <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                  {new Date(stream.scheduledAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                </div>
              </div>
              <span className="sticker" style={{ fontSize: 8 }}>{stream.category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
