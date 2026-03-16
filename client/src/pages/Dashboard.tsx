import { useState } from 'react';
import { streams, pastStreams } from '@/data/streams';
import StreamPlayer from '@/components/StreamPlayer';
import StatBlock from '@/components/StatBlock';
import ChatPanel from '@/components/ChatPanel';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const mockViewerData = Array.from({ length: 30 }, (_, i) => ({
  time: `${i * 2}m`,
  viewers: Math.floor(600 + Math.random() * 800 + (i > 15 ? 400 : 0)),
}));

const mockHealth = {
  bitrate: 4500,
  framerate: 30,
  resolution: '1080p',
  quality: 'excellent' as const,
  droppedFrames: 2,
};

export default function Dashboard() {
  const [isLive, setIsLive] = useState(true);
  const [showKey, setShowKey] = useState(false);
  const [title, setTitle] = useState('Late Night Studio Session — New Album Preview');
  const liveStream = streams[0];

  const qualityBadge = {
    excellent: 'brutal-badge--green',
    good: 'brutal-badge--yellow',
    poor: 'brutal-badge--coral',
  };

  return (
    <div>
      <h1 className="font-instrument-serif" style={{ fontSize: 28, marginBottom: 24 }}>
        Creator Dashboard
      </h1>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
        <StatBlock label="Current Viewers" value={1247} accent />
        <StatBlock label="Peak Viewers" value={1892} />
        <StatBlock label="Duration" value="1:42:30" />
        <StatBlock label="Messages" value={2891} />
      </div>

      {/* Player + Health */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, marginBottom: 32 }}>
        <StreamPlayer
          playbackId={liveStream.playbackId}
          title={liveStream.title}
          isLive={isLive}
          viewerCount={liveStream.viewerCount}
          size="sm"
        />

        <div className="card-brutal" style={{ padding: '16px 20px' }}>
          <div className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>
            STREAM HEALTH
          </div>
          {[
            { label: 'BITRATE', value: `${mockHealth.bitrate.toLocaleString()} kbps` },
            { label: 'FPS', value: String(mockHealth.framerate) },
            { label: 'RESOLUTION', value: mockHealth.resolution },
            { label: 'DROPPED', value: `${mockHealth.droppedFrames} frames` },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderTop: '1px solid var(--border-light)' }}>
              <span className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{item.label}</span>
              <span className="font-space-mono" style={{ fontSize: 12, fontWeight: 700 }}>{item.value}</span>
            </div>
          ))}
          <div style={{ marginTop: 12 }}>
            <span className={`brutal-badge ${qualityBadge[mockHealth.quality]}`}>
              {mockHealth.quality.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Go Live button */}
      <button
        className={`btn-brutal ${isLive ? 'btn-brutal--yellow' : 'btn-brutal--coral'}`}
        style={{
          width: '100%', padding: '18px 20px', fontSize: 16, textAlign: 'center',
          marginBottom: 32, boxShadow: 'var(--shadow-hard-lg)',
        }}
        onClick={() => setIsLive(!isLive)}
      >
        {isLive ? 'END STREAM' : 'GO LIVE'}
      </button>

      {/* Stream Settings */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">STREAM SETTINGS</div>
        <div className="card-brutal" style={{ padding: 20 }}>
          <div style={{ marginBottom: 16 }}>
            <label className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
              TITLE
            </label>
            <input
              className="input-brutal"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <label className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                CATEGORY
              </label>
              <select className="input-brutal" defaultValue="MUSIC" style={{ cursor: 'pointer' }}>
                <option>MUSIC</option>
                <option>ART</option>
                <option>FASHION</option>
                <option>TALK</option>
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                TAGS
              </label>
              <div className="flex gap-2" style={{ flexWrap: 'wrap' }}>
                {['hiphop', 'studio', 'unreleased'].map(tag => (
                  <span key={tag} className="sticker">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Key */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">STREAM KEY</div>
        <div className="card-brutal" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
          <code className="font-jetbrains" style={{ flex: 1, fontSize: 12, padding: '8px 12px', background: 'var(--bg-muted)', border: '1px solid var(--border-light)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {showKey ? 'rtmp://global-live.mux.com:5222/app/sk_live_abc123def456' : '••••••••••••••••••••••••••••••••••••••'}
          </code>
          <button className="btn-brutal" style={{ fontSize: 10, padding: '8px 14px' }} onClick={() => setShowKey(!showKey)}>
            {showKey ? 'HIDE' : 'SHOW'}
          </button>
          <button className="btn-brutal btn-brutal--yellow" style={{ fontSize: 10, padding: '8px 14px' }}
            onClick={() => navigator.clipboard?.writeText('rtmp://global-live.mux.com:5222/app/sk_live_abc123def456')}
          >
            COPY
          </button>
        </div>
      </section>

      {/* Viewer Analytics */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">VIEWER ANALYTICS</div>
        <div className="card-brutal" style={{ padding: '20px 20px 10px' }}>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={mockViewerData}>
              <defs>
                <linearGradient id="viewerGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#000" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#000" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="time"
                tick={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fill: '#999' }}
                axisLine={{ stroke: '#000', strokeWidth: 2 }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fill: '#999' }}
                axisLine={{ stroke: '#000', strokeWidth: 2 }}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: '#000', border: '2px solid #000', fontFamily: "'Space Mono', monospace",
                  fontSize: 11, color: '#fff', padding: '6px 10px',
                }}
                labelStyle={{ color: '#999' }}
              />
              <Area
                type="stepAfter"
                dataKey="viewers"
                stroke="#000"
                strokeWidth={2}
                fill="url(#viewerGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* Chat Moderation */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">CHAT MODERATION</div>
        <div style={{ height: 300 }}>
          <ChatPanel />
        </div>
      </section>

      {/* Recent Streams */}
      <section style={{ marginBottom: 32 }}>
        <div className="section-label">RECENT STREAMS</div>
        <div className="card-brutal" style={{ padding: 0 }}>
          {pastStreams.map((stream, i) => {
            const duration = stream.startedAt && stream.endedAt
              ? `${Math.round((new Date(stream.endedAt).getTime() - new Date(stream.startedAt).getTime()) / 60000)}m`
              : '—';
            return (
              <div
                key={stream.id}
                style={{
                  display: 'flex', alignItems: 'center', gap: 16, padding: '12px 16px',
                  borderBottom: i < pastStreams.length - 1 ? '1px solid var(--border-light)' : 'none',
                  background: i % 2 === 0 ? 'transparent' : 'var(--bg-elevated)',
                }}
              >
                <img src={stream.thumbnailUrl} alt="" style={{ width: 60, height: 34, objectFit: 'cover', border: '2px solid #000' }} />
                <div style={{ flex: 1 }}>
                  <div className="font-instrument-serif" style={{ fontSize: 14 }}>{stream.title}</div>
                  <div className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    {duration} · {stream.peakViewers.toLocaleString()} peak · {new Date(stream.scheduledAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
                <span className="brutal-badge" style={{ fontSize: 8 }}>ENDED</span>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          div[style*="gridTemplateColumns: 'repeat(4, 1fr)'"] { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="gridTemplateColumns: '1fr 280px'"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
