import type { Drop } from './types';
import { creators } from './creators';

export const drops: Drop[] = [
  {
    id: 'd1',
    creatorId: 'c3',
    creator: creators[2],
    title: 'KAI WATTS — "MIDNIGHT" VINYL LP',
    description: 'Limited edition 180g vinyl pressing of the "Midnight" EP. Hand-numbered, custom sleeve artwork by DEUCE. Each copy includes a download code for 3 unreleased bonus tracks.',
    price: 79,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop',
    ],
    totalQuantity: 200,
    remainingQuantity: 47,
    status: 'live',
    dropTime: '2026-03-16T22:00:00Z',
    soldOutAt: null,
    soldOutDuration: null,
    waitingCount: 347,
    category: 'MUSIC',
    details: [
      { label: 'Format', value: '12" Vinyl LP, 180g' },
      { label: 'Tracks', value: '8 + 3 bonus digital' },
      { label: 'Sleeve Art', value: 'Original by DEUCE' },
      { label: 'Shipping', value: 'Ships within 14 days' },
    ],
  },
  {
    id: 'd2',
    creatorId: 'c4',
    creator: creators[3],
    title: 'MIRA CHEN — SS26 CAPSULE TEE',
    description: 'Heavyweight 300gsm cotton tee. Oversized fit with embroidered logo and custom woven label. Part of the SS26 capsule — once they\'re gone, they\'re gone.',
    price: 89,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
    ],
    totalQuantity: 150,
    remainingQuantity: 150,
    status: 'upcoming',
    dropTime: '2026-03-18T19:00:00Z',
    soldOutAt: null,
    soldOutDuration: null,
    waitingCount: 512,
    category: 'FASHION',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    details: [
      { label: 'Material', value: '300gsm Cotton' },
      { label: 'Fit', value: 'Oversized' },
      { label: 'Colors', value: 'Black, Cream' },
      { label: 'Shipping', value: 'Ships within 7 days' },
    ],
  },
  {
    id: 'd3',
    creatorId: 'c2',
    creator: creators[1],
    title: 'DEUCE — "UNTITLED 014" PRINT',
    description: 'Giclée print on Hahnemühle Photo Rag. Signed and numbered. Certificate of authenticity included.',
    price: 149,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&h=600&fit=crop',
    ],
    totalQuantity: 50,
    remainingQuantity: 50,
    status: 'upcoming',
    dropTime: '2026-03-19T21:00:00Z',
    soldOutAt: null,
    soldOutDuration: null,
    waitingCount: 189,
    category: 'ART',
    details: [
      { label: 'Size', value: '18" x 24"' },
      { label: 'Paper', value: 'Hahnemühle Photo Rag' },
      { label: 'Edition', value: '1 of 50' },
      { label: 'Shipping', value: 'Ships within 21 days' },
    ],
  },
  {
    id: 'd4',
    creatorId: 'c1',
    creator: creators[0],
    title: 'NYLA — SAMPLE PACK VOL.3',
    description: 'Digital sample pack: 60 original loops, 40 one-shots, 15 drum breaks. Royalty-free for commercial use. WAV + stems.',
    price: 29,
    currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=600&h=600&fit=crop',
    ],
    totalQuantity: 500,
    remainingQuantity: 500,
    status: 'upcoming',
    dropTime: '2026-03-20T18:00:00Z',
    soldOutAt: null,
    soldOutDuration: null,
    waitingCount: 723,
    category: 'MUSIC',
    details: [
      { label: 'Format', value: 'WAV 24-bit / 44.1kHz' },
      { label: 'Contents', value: '115 files + stems' },
      { label: 'License', value: 'Royalty-free commercial' },
      { label: 'Delivery', value: 'Instant download' },
    ],
  },
];

export const soldOutDrops: Drop[] = [
  {
    id: 'sd1', creatorId: 'c3', creator: creators[2],
    title: 'KAI WATTS — "FIRST LIGHT" CD', description: 'Debut EP on CD.', price: 19, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop',
    images: [], totalQuantity: 100, remainingQuantity: 0, status: 'sold_out',
    dropTime: '2026-03-10T20:00:00Z', soldOutAt: '2026-03-10T20:02:34Z', soldOutDuration: '2m 34s',
    waitingCount: 0, category: 'MUSIC', details: [],
  },
  {
    id: 'sd2', creatorId: 'c4', creator: creators[3],
    title: 'MIRA — FW25 HOODIE', description: 'Limited hoodie.', price: 149, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
    images: [], totalQuantity: 75, remainingQuantity: 0, status: 'sold_out',
    dropTime: '2026-03-08T19:00:00Z', soldOutAt: '2026-03-08T19:01:12Z', soldOutDuration: '1m 12s',
    waitingCount: 0, category: 'FASHION', details: [],
  },
  {
    id: 'sd3', creatorId: 'c2', creator: creators[1],
    title: 'DEUCE — "UNTITLED 013"', description: 'Signed print.', price: 199, currency: 'USD',
    imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=600&fit=crop',
    images: [], totalQuantity: 25, remainingQuantity: 0, status: 'sold_out',
    dropTime: '2026-03-05T21:00:00Z', soldOutAt: '2026-03-05T21:00:47Z', soldOutDuration: '47s',
    waitingCount: 0, category: 'ART', details: [],
  },
];

export function getActiveDrop(): Drop | undefined {
  return drops.find(d => d.status === 'live');
}

export function getUpcomingDrops(): Drop[] {
  return drops.filter(d => d.status === 'upcoming');
}
