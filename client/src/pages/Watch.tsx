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
      <div className="watch-layout">
        {/* Left column — player + info */}
        <div className="watch-player-col">
          <StreamPlayer
            playbackId={stream.playbackId}
            title={stream.title}
            isLive={stream.status === 'live'}
            viewerCount={stream.viewerCount}
            size="sm"
          />

          {/* Stream info */}
          <div style={{ padding: '12px 0' }}>
            <h1 className="font-instrument-serif" style={{ fontSize: 20, marginBottom: 10, lineHeight: 1.2 }}>
              {stream.title}
            </h1>
            <div className="flex items-center justify-between" style={{ flexWrap: 'wrap', gap: 10 }}>
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
            <div className="card-brutal" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ padding: '8px 12px', borderBottom: '3px solid #000', background: 'var(--accent-coral)' }}>
                <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}>
                  DROP ACTIVE — BUY NOW
                </span>
              </div>
              <div style={{ display: 'flex', gap: 12, padding: 12, alignItems: 'center' }}>
                <img
                  src={drop.imageUrl}
                  alt={drop.title}
                  style={{ width: 64, height: 64, objectFit: 'cover', border: '2px solid #000', flexShrink: 0 }}
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="font-instrument-serif" style={{ fontSize: 14, marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {drop.title}
                  </div>
                  <div className="font-space-mono" style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
                    ${drop.price}
                  </div>
                  <InventoryBar remaining={inventory.remaining} total={inventory.total} percentage={inventory.percentage} />
                </div>
                <button className="btn-brutal btn-brutal--coral" style={{ flexShrink: 0, padding: '10px 18px', fontSize: 10 }}>
                  BUY NOW
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right column — chat */}
        <div className="watch-chat-col">
          <ChatPanel />
        </div>
      </div>

      <style>{`
        .watch-layout {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 0;
          height: calc(100vh - 100px);
        }
        .watch-player-col {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          padding-right: 0;
        }
        .watch-chat-col {
          border-left: 3px solid #000;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .watch-layout {
            grid-template-columns: 1fr;
            height: auto;
          }
          .watch-chat-col {
            border-left: none;
            border-top: 3px solid #000;
            height: 400px;
          }
        }
      `}</style>
    </div>
  );
}
