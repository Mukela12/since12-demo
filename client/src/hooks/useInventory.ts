import { useState, useEffect } from 'react';

export function useInventory(initial: number, total: number, depletionRate = 8000) {
  const [remaining, setRemaining] = useState(initial);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      setRemaining(prev => Math.max(0, prev - 1));
    }, depletionRate + Math.random() * 4000);
    return () => clearInterval(interval);
  }, [remaining, depletionRate]);

  const percentage = (remaining / total) * 100;
  return { remaining, total, percentage };
}
