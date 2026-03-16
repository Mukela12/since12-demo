import { useRef, useEffect, useState } from 'react';
import { useMockChat } from '@/hooks/useMockChat';

const BADGE_STYLES: Record<string, { bg: string; color: string }> = {
  creator: { bg: 'var(--accent-coral)', color: '#fff' },
  mod: { bg: '#000', color: '#fff' },
  vip: { bg: 'var(--accent-yellow)', color: '#000' },
  subscriber: { bg: 'var(--bg-muted)', color: '#000' },
};

export default function ChatPanel() {
  const { messages, sendMessage } = useMockChat();
  const bottomRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div style={{
      border: '3px solid #000',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      background: 'var(--bg-surface)',
    }}>
      {/* Header */}
      <div style={{ padding: '10px 14px', borderBottom: '3px solid #000' }}>
        <span className="font-space-mono" style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>
          LIVE CHAT
        </span>
        <span className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', marginLeft: 8 }}>
          {messages.length} messages
        </span>
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: 'auto', padding: 0 }}>
        {messages.map((msg, i) => (
          <div
            key={msg.id}
            className={i % 2 === 0 ? '' : 'stripe-even'}
            style={{
              padding: '6px 14px',
              display: 'flex',
              gap: 6,
              alignItems: 'baseline',
              background: i % 2 !== 0 ? 'var(--bg-elevated)' : undefined,
              animation: 'slideInRight 200ms ease-out',
            }}
          >
            {msg.badge && (
              <span style={{
                fontSize: 8, fontWeight: 700, fontFamily: "'Space Mono', monospace",
                textTransform: 'uppercase', padding: '1px 5px',
                background: BADGE_STYLES[msg.badge]?.bg,
                color: BADGE_STYLES[msg.badge]?.color,
                border: '1px solid #000',
                flexShrink: 0,
              }}>
                {msg.badge}
              </span>
            )}
            <span className="font-space-mono" style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent-coral)', flexShrink: 0 }}>
              {msg.userName}
            </span>
            <span className="font-recursive" style={{ fontSize: 13, wordBreak: 'break-word' }}>
              {msg.content}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: 10, borderTop: '3px solid #000', display: 'flex', gap: 8 }}>
        <input
          className="input-brutal"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="SAY SOMETHING..."
          style={{ flex: 1 }}
        />
        <button className="btn-brutal btn-brutal--yellow" onClick={handleSend} style={{ flexShrink: 0 }}>
          SEND
        </button>
      </div>
    </div>
  );
}
