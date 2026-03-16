import { useCountdown } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  targetDate: string;
  size?: 'sm' | 'lg';
}

export default function CountdownTimer({ targetDate, size = 'sm' }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return <span className="brutal-badge brutal-badge--coral">LIVE NOW</span>;
  }

  const pad = (n: number) => String(n).padStart(2, '0');
  const digitSize = size === 'lg' ? 56 : 14;
  const labelSize = size === 'lg' ? 10 : 0;

  if (size === 'lg') {
    return (
      <div className="flex items-center gap-4">
        {[
          { val: pad(days), label: 'DAYS' },
          { val: pad(hours), label: 'HRS' },
          { val: pad(minutes), label: 'MIN' },
          { val: pad(seconds), label: 'SEC' },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="font-space-mono" style={{ fontSize: digitSize, fontWeight: 700, lineHeight: 1, color: 'var(--text-primary)' }}>
              {item.val}
            </span>
            {labelSize > 0 && (
              <span className="font-space-mono" style={{ fontSize: labelSize, fontWeight: 700, color: 'var(--text-muted)', marginTop: 4, textTransform: 'uppercase' }}>
                {item.label}
              </span>
            )}
            {i < 3 && (
              <span className="font-space-mono" style={{ fontSize: digitSize * 0.6, fontWeight: 700, color: 'var(--text-muted)', position: 'absolute', marginLeft: `${(i + 1) * 80 - 10}px` }}>
              </span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <span className="font-space-mono" style={{ fontSize: digitSize, fontWeight: 700 }}>
      {days > 0 && `${days}d `}{pad(hours)}:{pad(minutes)}:{pad(seconds)}
    </span>
  );
}
