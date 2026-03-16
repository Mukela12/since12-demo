import { getLiveStream, getScheduledStreams } from '@/data/streams';
import { drops, soldOutDrops } from '@/data/drops';
import { getActiveDrop } from '@/data/drops';
import StreamPlayer from '@/components/StreamPlayer';
import CreatorCard from '@/components/CreatorCard';
import DropCard from '@/components/DropCard';
import InventoryBar from '@/components/InventoryBar';
import { useInventory } from '@/hooks/useInventory';
import { Link } from 'react-router-dom';

export default function Home() {
  const liveStream = getLiveStream();
  const scheduled = getScheduledStreams();
  const activeDrop = getActiveDrop();
  const upcomingDrops = drops.filter(d => d.status === 'upcoming');
  const inventory = useInventory(activeDrop?.remainingQuantity ?? 0, activeDrop?.totalQuantity ?? 1);

  return (
    <div>
      {/* Hero: Featured Stream + Active Drop side by side */}
      {liveStream && (
        <section className="home-hero" style={{ marginBottom: 32 }}>
          {/* Player column */}
          <div style={{ minWidth: 0 }}>
            <Link to={`/watch/${liveStream.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <StreamPlayer
                playbackId={liveStream.playbackId}
                title={liveStream.title}
                isLive
                viewerCount={liveStream.viewerCount}
                size="sm"
              />
            </Link>
            <div style={{ marginTop: 12 }}>
              <Link to={`/watch/${liveStream.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 className="font-instrument-serif" style={{ fontSize: 20, marginBottom: 8, lineHeight: 1.2 }}>
                  {liveStream.title}
                </h2>
              </Link>
              <CreatorCard creator={liveStream.creator} />
              <div className="flex gap-2" style={{ flexWrap: 'wrap', marginTop: 8 }}>
                <span className="sticker">{liveStream.category}</span>
                {liveStream.tags.map(tag => (
                  <span key={tag} className="sticker sticker--rot-pos" style={{ background: 'var(--bg-elevated)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right sidebar: active drop + schedule preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Active drop card */}
            {activeDrop && (
              <Link to={`/drop/${activeDrop.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-brutal" style={{ overflow: 'hidden', padding: 0 }}>
                  <div style={{ padding: '8px 12px', borderBottom: '3px solid #000', background: 'var(--accent-coral)' }}>
                    <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      DROP ACTIVE NOW
                    </span>
                  </div>
                  <img
                    src={activeDrop.imageUrl}
                    alt={activeDrop.title}
                    style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block', borderBottom: '3px solid #000' }}
                  />
                  <div style={{ padding: '12px 14px' }}>
                    <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 4 }}>
                      {activeDrop.creator.name}
                    </div>
                    <div className="font-instrument-serif" style={{ fontSize: 15, marginBottom: 8, lineHeight: 1.3 }}>
                      {activeDrop.title}
                    </div>
                    <InventoryBar remaining={inventory.remaining} total={inventory.total} percentage={inventory.percentage} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                      <span className="font-space-mono" style={{ fontSize: 18, fontWeight: 700 }}>${activeDrop.price}</span>
                      <button className="btn-brutal btn-brutal--coral" style={{ padding: '6px 14px', fontSize: 10 }} onClick={e => e.preventDefault()}>
                        BUY NOW
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Next up schedule mini */}
            <div className="card-brutal" style={{ padding: 0 }}>
              <div style={{ padding: '8px 12px', borderBottom: '3px solid #000' }}>
                <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>NEXT UP</span>
              </div>
              {scheduled.slice(0, 3).map((stream, i) => (
                <Link
                  key={stream.id}
                  to={`/watch/${stream.id}`}
                  style={{
                    textDecoration: 'none', color: 'inherit',
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 12px',
                    borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none',
                    background: i % 2 !== 0 ? 'var(--bg-elevated)' : 'transparent',
                  }}
                >
                  <img src={stream.thumbnailUrl} alt="" style={{ width: 48, height: 28, objectFit: 'cover', border: '1px solid #000', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="font-instrument-serif" style={{ fontSize: 12, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {stream.title}
                    </div>
                    <div className="font-space-mono" style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                      {stream.creator.name} · {new Date(stream.scheduledAt).toLocaleDateString('en-US', { weekday: 'short' })} {new Date(stream.scheduledAt).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Dropping Soon */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">DROPPING SOON</div>
        <div className="drops-grid">
          {upcomingDrops.map(drop => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </section>

      {/* Sold Out — social proof */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">SOLD OUT — GONE FOREVER</div>
        <div className="drops-grid">
          {soldOutDrops.map(drop => (
            <DropCard key={drop.id} drop={drop} />
          ))}
        </div>
      </section>

      {/* Full Schedule */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">UPCOMING SCHEDULE</div>
        <div className="card-brutal" style={{ padding: 0, overflow: 'hidden' }}>
          {scheduled.map((stream, i) => (
            <Link
              key={stream.id}
              to={`/watch/${stream.id}`}
              style={{
                textDecoration: 'none', color: 'inherit',
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '10px 14px',
                borderBottom: i < scheduled.length - 1 ? '1px solid var(--border-light)' : 'none',
                background: i % 2 !== 0 ? 'var(--bg-elevated)' : 'transparent',
              }}
            >
              <img
                src={stream.thumbnailUrl}
                alt={stream.title}
                style={{ width: 64, height: 36, objectFit: 'cover', border: '2px solid #000', flexShrink: 0 }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="font-instrument-serif" style={{ fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
              <span className="brutal-badge" style={{ fontSize: 8 }}>{stream.category}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
