import { Router } from 'express';

interface ChatMessage {
  id: string;
  streamId: string;
  userName: string;
  content: string;
  badge: string | null;
  createdAt: string;
}

let messageId = 1;
const messages: ChatMessage[] = [
  { id: 'cm1', streamId: 's1', userName: 'supreme_kid', content: 'this beat is CRAZY', badge: 'subscriber', createdAt: new Date().toISOString() },
  { id: 'cm2', streamId: 's1', userName: 'nyla.wav', content: 'the mix sounds clean', badge: 'creator', createdAt: new Date().toISOString() },
  { id: 'cm3', streamId: 's1', userName: 'artdeals', content: 'when is the vinyl dropping??', badge: null, createdAt: new Date().toISOString() },
  { id: 'cm4', streamId: 's1', userName: 'mod_seven', content: 'drop is live in the shop now', badge: 'mod', createdAt: new Date().toISOString() },
  { id: 'cm5', streamId: 's1', userName: 'luna99s', content: 'been waiting all week for this', badge: 'vip', createdAt: new Date().toISOString() },
  { id: 'cm6', streamId: 's1', userName: 'vibes.only', content: 'the quality is insane', badge: null, createdAt: new Date().toISOString() },
  { id: 'cm7', streamId: 's1', userName: 'deuce.studio', content: 'the sleeve art came out perfect', badge: 'creator', createdAt: new Date().toISOString() },
  { id: 'cm8', streamId: 's1', userName: 'streetkulture', content: 'copped 2 vinyls already', badge: 'subscriber', createdAt: new Date().toISOString() },
];

export const chatRouter = Router();

chatRouter.get('/:streamId', (req, res) => {
  const streamMessages = messages.filter(m => m.streamId === req.params.streamId);
  res.json(streamMessages);
});

chatRouter.post('/:streamId', (req, res) => {
  const { userName, content, badge } = req.body;
  if (!userName || !content) return res.status(400).json({ error: 'userName and content required' });

  const msg: ChatMessage = {
    id: `cm${++messageId}`,
    streamId: req.params.streamId,
    userName,
    content,
    badge: badge || null,
    createdAt: new Date().toISOString(),
  };
  messages.push(msg);
  res.status(201).json(msg);
});

// Moderation: delete message
chatRouter.delete('/:streamId/:messageId', (req, res) => {
  const idx = messages.findIndex(m => m.id === req.params.messageId && m.streamId === req.params.streamId);
  if (idx === -1) return res.status(404).json({ error: 'Message not found' });
  messages.splice(idx, 1);
  res.json({ success: true });
});
