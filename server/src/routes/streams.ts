import { Router } from 'express';

const MUX_TEST_ID = 'EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs';

const streams = [
  {
    id: 's1', creatorId: 'c3', title: 'Late Night Studio Session — New Album Preview',
    category: 'MUSIC', tags: ['hiphop', 'studio', 'unreleased'],
    status: 'live', scheduledAt: '2026-03-16T22:00:00Z', startedAt: '2026-03-16T22:05:00Z',
    viewerCount: 1247, peakViewers: 1892, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=450&fit=crop',
  },
  {
    id: 's2', creatorId: 'c1', title: 'Vinyl Crate Digging — Finding Hidden Gems',
    category: 'MUSIC', tags: ['vinyl', 'curation'],
    status: 'scheduled', scheduledAt: '2026-03-17T20:00:00Z', startedAt: null,
    viewerCount: 0, peakViewers: 0, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?w=800&h=450&fit=crop',
  },
  {
    id: 's3', creatorId: 'c4', title: 'Capsule Collection Reveal — SS26 Preview',
    category: 'FASHION', tags: ['streetwear', 'capsule'],
    status: 'scheduled', scheduledAt: '2026-03-18T19:00:00Z', startedAt: null,
    viewerCount: 0, peakViewers: 0, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=450&fit=crop',
  },
  {
    id: 's4', creatorId: 'c2', title: 'Live Art Session — 1/1 Original on Canvas',
    category: 'ART', tags: ['painting', '1of1'],
    status: 'scheduled', scheduledAt: '2026-03-19T21:00:00Z', startedAt: null,
    viewerCount: 0, peakViewers: 0, playbackId: MUX_TEST_ID,
    thumbnailUrl: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&h=450&fit=crop',
  },
];

export const streamsRouter = Router();

streamsRouter.get('/', (_req, res) => {
  res.json(streams);
});

streamsRouter.get('/live', (_req, res) => {
  const live = streams.find(s => s.status === 'live');
  if (!live) return res.status(404).json({ error: 'No live stream' });
  res.json(live);
});

streamsRouter.get('/scheduled', (_req, res) => {
  res.json(streams.filter(s => s.status === 'scheduled'));
});

streamsRouter.get('/:id', (req, res) => {
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  res.json(stream);
});

// Simulate go-live / end stream
streamsRouter.post('/:id/go-live', (req, res) => {
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  stream.status = 'live';
  stream.startedAt = new Date().toISOString();
  stream.viewerCount = Math.floor(Math.random() * 500) + 100;
  res.json(stream);
});

streamsRouter.post('/:id/end', (req, res) => {
  const stream = streams.find(s => s.id === req.params.id);
  if (!stream) return res.status(404).json({ error: 'Stream not found' });
  stream.status = 'ended' as any;
  res.json(stream);
});
