export interface Creator {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  banner: string;
  tagline: string;
  bio: string;
  followers: number;
  totalDrops: number;
  totalStreams: number;
  soldOutCount: number;
  socials: { platform: string; url: string }[];
  isVerified: boolean;
}

export interface Stream {
  id: string;
  creatorId: string;
  creator: Creator;
  title: string;
  category: string;
  tags: string[];
  status: 'scheduled' | 'live' | 'ended';
  scheduledAt: string;
  startedAt: string | null;
  endedAt: string | null;
  viewerCount: number;
  peakViewers: number;
  playbackId: string;
  thumbnailUrl: string;
}

export interface Drop {
  id: string;
  creatorId: string;
  creator: Creator;
  title: string;
  description: string;
  price: number;
  currency: string;
  imageUrl: string;
  images: string[];
  totalQuantity: number;
  remainingQuantity: number;
  status: 'upcoming' | 'live' | 'sold_out' | 'ended';
  dropTime: string;
  soldOutAt: string | null;
  soldOutDuration: string | null;
  waitingCount: number;
  category: string;
  sizes?: string[];
  details: { label: string; value: string }[];
}

export interface ChatMessage {
  id: string;
  streamId: string;
  userName: string;
  content: string;
  badge: 'mod' | 'vip' | 'subscriber' | 'creator' | null;
  createdAt: string;
}

export interface StreamHealth {
  bitrate: number;
  framerate: number;
  resolution: string;
  quality: 'excellent' | 'good' | 'poor';
  droppedFrames: number;
}

export interface ViewerDataPoint {
  time: string;
  count: number;
}

export interface DashboardStats {
  currentViewers: number;
  peakViewers: number;
  streamDuration: string;
  totalMessages: number;
  viewerHistory: ViewerDataPoint[];
}
