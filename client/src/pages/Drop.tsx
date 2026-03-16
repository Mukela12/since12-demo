import { useParams } from 'react-router-dom';
import { drops } from '@/data/drops';
import CountdownTimer from '@/components/CountdownTimer';
import ChatPanel from '@/components/ChatPanel';
import InventoryBar from '@/components/InventoryBar';
import CreatorCard from '@/components/CreatorCard';
import { useInventory } from '@/hooks/useInventory';
import { useCountdown } from '@/hooks/useCountdown';

export default function Drop() {
  const { dropId } = useParams();
  const drop = drops.find(d => d.id === dropId) ?? drops[0];
  const { isExpired } = useCountdown(drop.dropTime);
  const inventory = useInventory(drop.remainingQuantity, drop.totalQuantity);

  const isLive = drop.status === 'live' || isExpired;

  return (
    <div>
      {/* Countdown Hero */}
      {!isLive && (
        <section style={{
          textAlign: 'center',
          padding: '48px 20px',
          marginBottom: 32,
          background: 'var(--bg-cream)',
          border: '3px solid #000',
          boxShadow: 'var(--shadow-hard-lg)',
        }}>
          <div className="font-space-mono" style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16, letterSpacing: '0.1em' }}>
            DROPPING IN
          </div>
          <CountdownTimer targetDate={drop.dropTime} size="lg" />
          <div className="font-space-mono" style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 20, textTransform: 'uppercase' }}>
            {drop.waitingCount.toLocaleString()} PEOPLE WAITING
          </div>
        </section>
      )}

      {isLive && (
        <section style={{
          textAlign: 'center', padding: '24px 20px', marginBottom: 32,
          background: 'var(--accent-coral)', border: '3px solid #000',
        }}>
          <span className="font-space-mono" style={{ fontSize: 18, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            DROP IS LIVE — BUY NOW
          </span>
        </section>
      )}

      {/* Product section */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 40 }}>
        {/* Product image */}
        <div className="card-brutal" style={{ overflow: 'hidden', padding: 0 }}>
          <img
            src={drop.imageUrl}
            alt={drop.title}
            style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Product info */}
        <div>
          <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 8 }}>
            {drop.category}
          </div>
          <h1 className="font-instrument-serif" style={{ fontSize: 28, marginBottom: 12, lineHeight: 1.2 }}>
            {drop.title}
          </h1>
          <div style={{ marginBottom: 16 }}>
            <CreatorCard creator={drop.creator} showFollow={false} />
          </div>
          <div className="font-space-mono" style={{ fontSize: 32, fontWeight: 700, marginBottom: 16 }}>
            ${drop.price}
          </div>

          <div style={{ marginBottom: 16 }}>
            <span className="brutal-badge brutal-badge--black">
              {drop.totalQuantity} TOTAL · LIMITED EDITION
            </span>
          </div>

          {isLive && (
            <div style={{ marginBottom: 20 }}>
              <InventoryBar remaining={inventory.remaining} total={inventory.total} percentage={inventory.percentage} />
            </div>
          )}

          {drop.sizes && (
            <div style={{ marginBottom: 20 }}>
              <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 }}>SELECT SIZE</div>
              <div className="flex gap-2">
                {drop.sizes.map(size => (
                  <button key={size} className="brutal-tab">{size}</button>
                ))}
              </div>
            </div>
          )}

          <button
            className={`btn-brutal ${isLive ? 'btn-brutal--coral' : 'btn-brutal--yellow'}`}
            style={{ width: '100%', padding: '16px 20px', fontSize: 14, textAlign: 'center', marginBottom: 12 }}
          >
            {isLive ? 'BUY NOW' : 'NOTIFY ME'}
          </button>

          <p className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textAlign: 'center', textTransform: 'uppercase' }}>
            {isLive
              ? `${inventory.remaining} / ${inventory.total} REMAINING`
              : `${drop.waitingCount.toLocaleString()} PEOPLE WAITING`}
          </p>
        </div>
      </section>

      {/* Details */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">DETAILS</div>
        <div className="card-brutal" style={{ padding: 0 }}>
          <div style={{ padding: '16px 20px' }}>
            <p className="font-recursive" style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 16 }}>
              {drop.description}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {drop.details.map(detail => (
                <div key={detail.label} style={{ padding: '10px 0', borderTop: '1px solid var(--border-light)' }}>
                  <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 2 }}>
                    {detail.label}
                  </div>
                  <div className="font-space-mono" style={{ fontSize: 13, fontWeight: 700 }}>
                    {detail.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-drop chat */}
      <section style={{ marginBottom: 40 }}>
        <div className="section-label">LIVE CHAT — {isLive ? 'DROP IN PROGRESS' : 'PRE-DROP HYPE'}</div>
        <div style={{ height: 400 }}>
          <ChatPanel />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="gridTemplateColumns: '1fr 1fr'"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
