import { useState, useEffect, useCallback } from 'react';
import type { ChatMessage } from '@/data/types';
import { mockChatPool } from '@/data/chat';

export function useMockChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      const mock = mockChatPool[i % mockChatPool.length];
      setMessages(prev => [...prev.slice(-99), {
        id: crypto.randomUUID(),
        streamId: 'demo',
        userName: mock.userName,
        content: mock.content,
        badge: mock.badge,
        createdAt: new Date().toISOString(),
      }]);
      i++;
    }, 1800 + Math.random() * 3200);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = useCallback((text: string) => {
    setMessages(prev => [...prev.slice(-99), {
      id: crypto.randomUUID(),
      streamId: 'demo',
      userName: 'you',
      content: text,
      badge: null,
      createdAt: new Date().toISOString(),
    }]);
  }, []);

  return { messages, sendMessage };
}
