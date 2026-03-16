import { Router } from 'express';

const drops = [
  {
    id: 'd1', creatorId: 'c3', title: 'KAI WATTS — "MIDNIGHT" VINYL LP',
    description: 'Limited edition 180g vinyl pressing. Hand-numbered, custom sleeve artwork.',
    price: 79, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600&h=600&fit=crop',
    totalQuantity: 200, remainingQuantity: 47, status: 'live',
    dropTime: '2026-03-16T22:00:00Z', waitingCount: 347, category: 'MUSIC',
    details: [
      { label: 'Format', value: '12" Vinyl LP, 180g' },
      { label: 'Tracks', value: '8 + 3 bonus digital' },
      { label: 'Sleeve Art', value: 'Original by DEUCE' },
      { label: 'Shipping', value: 'Ships within 14 days' },
    ],
  },
  {
    id: 'd2', creatorId: 'c4', title: 'MIRA CHEN — SS26 CAPSULE TEE',
    description: 'Heavyweight 300gsm cotton tee. Oversized fit with embroidered logo.',
    price: 89, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    totalQuantity: 150, remainingQuantity: 150, status: 'upcoming',
    dropTime: '2026-03-18T19:00:00Z', waitingCount: 512, category: 'FASHION',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      { label: 'Material', value: '300gsm Cotton' },
      { label: 'Fit', value: 'Oversized' },
      { label: 'Colors', value: 'Black, Cream' },
      { label: 'Shipping', value: 'Ships within 7 days' },
    ],
  },
  {
    id: 'd3', creatorId: 'c2', title: 'DEUCE — "UNTITLED 014" PRINT',
    description: 'Giclée print on Hahnemühle Photo Rag. Signed and numbered.',
    price: 149, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=600&fit=crop',
    totalQuantity: 50, remainingQuantity: 50, status: 'upcoming',
    dropTime: '2026-03-19T21:00:00Z', waitingCount: 189, category: 'ART',
    details: [
      { label: 'Size', value: '18" x 24"' },
      { label: 'Paper', value: 'Hahnemühle Photo Rag' },
      { label: 'Edition', value: '1 of 50' },
      { label: 'Shipping', value: 'Ships within 21 days' },
    ],
  },
];

export const dropsRouter = Router();

dropsRouter.get('/', (_req, res) => {
  res.json(drops);
});

dropsRouter.get('/active', (_req, res) => {
  const active = drops.find(d => d.status === 'live');
  if (!active) return res.status(404).json({ error: 'No active drop' });
  res.json(active);
});

dropsRouter.get('/:id', (req, res) => {
  const drop = drops.find(d => d.id === req.params.id);
  if (!drop) return res.status(404).json({ error: 'Drop not found' });
  res.json(drop);
});

// Simulate purchase (depletes inventory)
dropsRouter.post('/:id/buy', (req, res) => {
  const drop = drops.find(d => d.id === req.params.id);
  if (!drop) return res.status(404).json({ error: 'Drop not found' });
  if (drop.status !== 'live') return res.status(400).json({ error: 'Drop not active' });
  if (drop.remainingQuantity <= 0) return res.status(400).json({ error: 'Sold out' });

  drop.remainingQuantity -= 1;
  if (drop.remainingQuantity === 0) {
    drop.status = 'sold_out' as any;
  }

  res.json({
    success: true,
    remaining: drop.remainingQuantity,
    total: drop.totalQuantity,
  });
});
