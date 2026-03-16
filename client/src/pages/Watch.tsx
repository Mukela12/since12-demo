import { useParams } from 'react-router-dom';
import { streams } from '@/data/streams';
import { getActiveDrop } from '@/data/drops';
import StreamPlayer from '@/components/StreamPlayer';
import ChatPanel from '@/components/ChatPanel';
import CreatorCard from '@/components/CreatorCard';
import InventoryBar from '@/components/InventoryBar';
import { useInventory } from '@/hooks/useInventory';

export default function Watch() {
  const { streamId } = useParams();
  const stream = streams.find(s => s.id === streamId) ?? streams[0];
  const drop = getActiveDrop();
  const inventory = useInventory(drop?.remainingQuantity ?? 0, drop?.totalQuantity ?? 1);

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 0, minHeight: 'calc(100vh - 160px)' }}>
        {/* Left column — player + info */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <StreamPlayer
            playbackId={stream.playbackId}
            title={stream.title}
            isLive={stream.status === 'live'}
            viewerCount={stream.viewerCount}
          />

          {/* Stream info */}
          <div style={{ padding: '16px 0' }}>
            <h1 className="font-instrument-serif" style={{ fontSize: 22, marginBottom: 12 }}>
              {stream.title}
            </h1>
            <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 12 }}>
              <CreatorCard creator={stream.creator} />
              <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                <span className="sticker">{stream.category}</span>
                {stream.tags.map(tag => (
                  <span key={tag} className="sticker sticker--rot-pos" style={{ background: 'var(--bg-elevated)' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Drop overlay — shown during live drops */}
          {drop && stream.status === 'live' && (
            <div className="card-brutal" style={{ padding: 0, marginTop: 16, overflow: 'hidden' }}>
              <div style={{ padding: '10px 14px', borderBottom: '3px solid #000', background: 'var(--accent-coral)' }}>
                <span className="font-space-mono" style={{ fontSize: 11, fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}>
                  DROP ACTIVE — BUY NOW
                </span>
              </div>
              <div style={{ display: 'flex', gap: 16, padding: 16, alignItems: 'center' }}>
                <img
                  src={drop.imageUrl}
                  alt={drop.title}
                  style={{ width: 80, height: 80, objectFit: 'cover', border: '2px solid #000', flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div className="font-instrument-serif" style={{ fontSize: 16, marginBottom: 4 }}>
                    {drop.title}
                  </div>
                  <div className="font-space-mono" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                    ${drop.price}
                  </div>
                  <InventoryBar remaining={inventory.remaining} total={inventory.total} percentage={inventory.percentage} />
                </div>
                <button className="btn-brutal btn-brutal--coral" style={{ flexShrink: 0, padding: '12px 24px' }}>
                  BUY NOW
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right column — chat */}
        <div style={{ borderLeft: '3px solid #000', marginLeft: -1 }}>
          <ChatPanel />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: '1fr 340px'"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="borderLeft: '3px solid #000'"] {
            border-left: none !important;
            border-top: 3px solid #000;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
