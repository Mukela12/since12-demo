import { lazy, Suspense } from 'react';
import LiveBadge from './LiveBadge';
import ViewerCount from './ViewerCount';

const MuxPlayer = lazy(() => import('@mux/mux-player-react'));

interface StreamPlayerProps {
  playbackId: string;
  title?: string;
  isLive?: boolean;
  viewerCount?: number;
  size?: 'sm' | 'lg';
}

export default function StreamPlayer({ playbackId, title, isLive, viewerCount, size = 'lg' }: StreamPlayerProps) {
  return (
    <div style={{ position: 'relative' }}>
      <div style={{
        border: '3px solid #000',
        boxShadow: size === 'lg' ? 'var(--shadow-hard-lg)' : 'var(--shadow-hard)',
        overflow: 'hidden',
        background: '#000',
      }}>
        <Suspense fallback={
          <div style={{ aspectRatio: '16/9', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="font-space-mono" style={{ color: '#666', fontSize: 12, textTransform: 'uppercase' }}>Loading player...</span>
          </div>
        }>
          <MuxPlayer
            playbackId={playbackId}
            streamType={isLive ? 'live' : 'on-demand'}
            autoPlay="muted"
            title={title}
            style={{ width: '100%', display: 'block', aspectRatio: '16/9' }}
          />
        </Suspense>
      </div>

      {(isLive || viewerCount) && (
        <div style={{ position: 'absolute', top: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pointerEvents: 'none' }}>
          {isLive && <LiveBadge />}
          {viewerCount && viewerCount > 0 && <ViewerCount count={viewerCount} />}
        </div>
      )}
    </div>
  );
}
