import { getLiveStream } from '@/data/streams';
import { getActiveDrop } from '@/data/drops';

export default function TickerBar() {
  const live = getLiveStream();
  const drop = getActiveDrop();

  const content = [
    live ? `NOW STREAMING: ${live.creator.name} — ${live.title}` : 'NO ACTIVE STREAM',
    drop ? `DROP ALERT: ${drop.title} — ${drop.remainingQuantity}/${drop.totalQuantity} LEFT` : '',
    live ? `${live.viewerCount.toLocaleString()} VIEWERS LIVE` : '',
    'THE CULTURE IS WATCHING',
    'SINCE I WAS 12 TV',
  ].filter(Boolean).join('  ———  ');

  return (
    <div className="ticker">
      <div className="ticker-content">
        {content}{'  ———  '}{content}{'  ———  '}
      </div>
    </div>
  );
}
