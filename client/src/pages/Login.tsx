import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left panel — dark with brand */}
      <div style={{
        flex: 1,
        background: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative grid lines */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Brand box */}
          <div style={{
            width: 120, height: 120, border: '3px solid var(--accent-coral)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 40px',
            boxShadow: '6px 6px 0px var(--accent-coral)',
          }}>
            <span className="font-space-mono" style={{ fontSize: 24, fontWeight: 700, color: '#fff' }}>S12</span>
          </div>

          <h1 className="font-instrument-serif" style={{ fontSize: 42, color: '#fff', marginBottom: 12, lineHeight: 1.1 }}>
            SINCE I WAS<br />12 TV
          </h1>
          <p className="font-space-mono" style={{
            fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.12em', color: 'var(--accent-coral)',
          }}>
            THE CULTURE IS WATCHING
          </p>

          <div style={{ marginTop: 60, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['LIVESTREAMS', 'EXCLUSIVE DROPS', 'CREATOR COMMUNITY'].map((text) => (
              <span key={text} className="font-space-mono" style={{
                fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)', letterSpacing: '0.08em',
              }}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div style={{
        flex: 1,
        background: 'var(--bg-base)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,
      }}>
        <div style={{ width: '100%', maxWidth: 380 }}>
          <h2 className="font-instrument-serif" style={{ fontSize: 28, marginBottom: 8 }}>
            Welcome back
          </h2>
          <p className="font-space-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 32 }}>
            Log in to your account
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: 16 }}>
              <label className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                EMAIL
              </label>
              <input
                className="input-brutal"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="YOU@EMAIL.COM"
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', display: 'block', marginBottom: 6 }}>
                PASSWORD
              </label>
              <input
                className="input-brutal"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="YOUR PASSWORD"
              />
            </div>

            <button
              type="submit"
              className="btn-brutal btn-brutal--yellow"
              style={{ width: '100%', padding: '14px 20px', fontSize: 13, textAlign: 'center' }}
            >
              LOG IN
            </button>
          </form>

          <div style={{ margin: '24px 0', textAlign: 'center' }}>
            <span className="font-space-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              OR CONTINUE WITH
            </span>
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <button className="btn-brutal btn-brutal--black" style={{ flex: 1, textAlign: 'center' }}>
              GOOGLE
            </button>
            <button className="btn-brutal" style={{ flex: 1, textAlign: 'center' }}>
              DISCORD
            </button>
          </div>

          <p className="font-space-mono" style={{ fontSize: 10, textAlign: 'center', marginTop: 32, textTransform: 'uppercase' }}>
            DON'T HAVE AN ACCOUNT?{' '}
            <span style={{ color: 'var(--accent-coral)', cursor: 'pointer', fontWeight: 700 }}>
              SIGN UP
            </span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="minHeight: '100vh'"] { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
