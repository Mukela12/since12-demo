import type { Stream } from './types';
import { creators } from './creators';

const MUX_TEST_ID = 'EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs';

export const streams: Stream[] = [
  {
    id: 's1',
    creatorId: 'c3',
    creator: creators[2],
    title: 'Late Night Studio Session — New Album Preview',
    category: 'MUSIC',
    tags: ['hiphop', 'studio', 'unreleased'],
    status: 'live',
    scheduledAt: '2026-03-16T22:00:00Z',
    startedAt: '2026-03-16T22:05:00Z',
    endedAt: null,
    viewerCount: 1247,
    peakViewers: 1892,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
  },
  {
    id: 's2',
    creatorId: 'c1',
    creator: creators[0],
    title: 'Vinyl Crate Digging — Finding Hidden Gems',
    category: 'MUSIC',
    tags: ['vinyl', 'curation', 'live'],
    status: 'scheduled',
    scheduledAt: '2026-03-17T20:00:00Z',
    startedAt: null,
    endedAt: null,
    viewerCount: 0,
    peakViewers: 0,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800&h=450&fit=crop',
  },
  {
    id: 's3',
    creatorId: 'c4',
    creator: creators[3],
    title: 'Capsule Collection Reveal — SS26 Preview',
    category: 'FASHION',
    tags: ['streetwear', 'capsule', 'exclusive'],
    status: 'scheduled',
    scheduledAt: '2026-03-18T19:00:00Z',
    startedAt: null,
    endedAt: null,
    viewerCount: 0,
    peakViewers: 0,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=450&fit=crop',
  },
  {
    id: 's4',
    creatorId: 'c2',
    creator: creators[1],
    title: 'Live Art Session — 1/1 Original on Canvas',
    category: 'ART',
    tags: ['painting', 'original', '1of1'],
    status: 'scheduled',
    scheduledAt: '2026-03-19T21:00:00Z',
    startedAt: null,
    endedAt: null,
    viewerCount: 0,
    peakViewers: 0,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=450&fit=crop',
  },
  {
    id: 's5',
    creatorId: 'c5',
    creator: creators[4],
    title: 'Culture Talk — What Happened This Week',
    category: 'TALK',
    tags: ['culture', 'discussion', 'weekly'],
    status: 'scheduled',
    scheduledAt: '2026-03-20T18:00:00Z',
    startedAt: null,
    endedAt: null,
    viewerCount: 0,
    peakViewers: 0,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
  },
  {
    id: 's6',
    creatorId: 'c3',
    creator: creators[2],
    title: 'Beat-Making Masterclass — From Scratch',
    category: 'MUSIC',
    tags: ['tutorial', 'production', 'beats'],
    status: 'scheduled',
    scheduledAt: '2026-03-21T20:00:00Z',
    startedAt: null,
    endedAt: null,
    viewerCount: 0,
    peakViewers: 0,
    playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
  },
];

export const pastStreams: Stream[] = [
  {
    id: 'ps1', creatorId: 'c3', creator: creators[2],
    title: 'Friday Night Freestyle Session', category: 'MUSIC', tags: ['freestyle', 'live'],
    status: 'ended', scheduledAt: '2026-03-14T22:00:00Z', startedAt: '2026-03-14T22:00:00Z', endedAt: '2026-03-15T00:14:00Z',
    viewerCount: 0, peakViewers: 2341, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
  },
  {
    id: 'ps2', creatorId: 'c3', creator: creators[2],
    title: 'Mixing Session — Unreleased Track', category: 'MUSIC', tags: ['mixing', 'studio'],
    status: 'ended', scheduledAt: '2026-03-12T20:00:00Z', startedAt: '2026-03-12T20:05:00Z', endedAt: '2026-03-12T21:45:00Z',
    viewerCount: 0, peakViewers: 1567, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop',
  },
  {
    id: 'ps3', creatorId: 'c3', creator: creators[2],
    title: 'Q&A — Ask Me Anything', category: 'TALK', tags: ['ama', 'community'],
    status: 'ended', scheduledAt: '2026-03-10T19:00:00Z', startedAt: '2026-03-10T19:00:00Z', endedAt: '2026-03-10T20:30:00Z',
    viewerCount: 0, peakViewers: 892, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=450&fit=crop',
  },
];

export function getLiveStream(): Stream | undefined {
  return streams.find(s => s.status === 'live');
}

export function getScheduledStreams(): Stream[] {
  return streams.filter(s => s.status === 'scheduled');
}
