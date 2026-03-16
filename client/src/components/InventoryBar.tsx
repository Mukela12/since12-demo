interface InventoryBarProps {
  remaining: number;
  total: number;
  percentage: number;
}

export default function InventoryBar({ remaining, total, percentage }: InventoryBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center" style={{ marginBottom: 4 }}>
        <span className="font-space-mono" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
          {remaining} / {total} LEFT
        </span>
        <span className="font-space-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>
          {Math.round(percentage)}%
        </span>
      </div>
      <div className="brutal-progress">
        <div
          className={`brutal-progress__fill ${percentage < 25 ? 'brutal-progress__fill--coral' : ''}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
