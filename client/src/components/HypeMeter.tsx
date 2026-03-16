import { useState, useEffect } from 'react';

interface HypeMeterProps {
  messageRate: number;
}

export default function HypeMeter({ messageRate }: HypeMeterProps) {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const clampedRate = Math.min(messageRate, 10);
    setLevel(clampedRate * 10);
  }, [messageRate]);

  const getLabel = () => {
    if (level >= 80) return 'ON FIRE';
    if (level >= 50) return 'HYPE';
    if (level >= 25) return 'VIBING';
    return 'CHILL';
  };

  const getColor = () => {
    if (level >= 80) return 'var(--accent-coral)';
    if (level >= 50) return 'var(--accent-yellow)';
    return 'var(--accent-black)';
  };

  return (
    <div style={{ padding: '10px 14px' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
        <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase' }}>
          CHAT HYPE
        </span>
        <span className="font-space-mono" style={{
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          color: getColor(),
        }}>
          {getLabel()}
        </span>
      </div>
      <div className="brutal-progress">
        <div
          className="brutal-progress__fill"
          style={{
            width: `${level}%`,
            background: getColor(),
            transition: 'width 500ms ease-out, background 300ms ease-out',
          }}
        />
      </div>
    </div>
  );
}
