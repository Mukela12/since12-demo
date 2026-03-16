import { Router } from 'express';

const creators = [
  {
    id: 'c1', name: 'NYLA', handle: '@nyla.wav',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=400&fit=crop',
    tagline: 'music is the message',
    bio: 'Producer, DJ, and curator. Based in Brooklyn.',
    followers: 24500, totalDrops: 47, totalStreams: 312, soldOutCount: 31, isVerified: true,
    socials: [{ platform: 'IG', url: '#' }, { platform: 'X', url: '#' }],
  },
  {
    id: 'c2', name: 'DEUCE', handle: '@deuce.studio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=400&fit=crop',
    tagline: 'art drops, not names',
    bio: 'Visual artist and designer. Limited prints, original works.',
    followers: 18200, totalDrops: 23, totalStreams: 156, soldOutCount: 19, isVerified: true,
    socials: [{ platform: 'IG', url: '#' }],
  },
  {
    id: 'c3', name: 'KAI WATTS', handle: '@kaiwatts',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop',
    tagline: 'live from the studio',
    bio: 'Recording artist & producer. Studio sessions live every week.',
    followers: 42100, totalDrops: 15, totalStreams: 89, soldOutCount: 12, isVerified: true,
    socials: [{ platform: 'IG', url: '#' }, { platform: 'SPOTIFY', url: '#' }],
  },
  {
    id: 'c4', name: 'MIRA CHEN', handle: '@miracreates',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&h=400&fit=crop',
    tagline: 'fashion meets function',
    bio: 'Streetwear designer. Every capsule is a conversation.',
    followers: 31400, totalDrops: 34, totalStreams: 201, soldOutCount: 28, isVerified: true,
    socials: [{ platform: 'IG', url: '#' }, { platform: 'TIKTOK', url: '#' }],
  },
  {
    id: 'c5', name: 'SEVEN', handle: '@seven.ctrl',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=400&fit=crop',
    tagline: 'control the narrative',
    bio: 'Content creator & community builder.',
    followers: 15800, totalDrops: 11, totalStreams: 445, soldOutCount: 8, isVerified: false,
    socials: [{ platform: 'IG', url: '#' }, { platform: 'YT', url: '#' }],
  },
];

export const creatorsRouter = Router();

creatorsRouter.get('/', (_req, res) => {
  res.json(creators);
});

creatorsRouter.get('/:id', (req, res) => {
  const creator = creators.find(c => c.id === req.params.id);
  if (!creator) return res.status(404).json({ error: 'Creator not found' });
  res.json(creator);
});
