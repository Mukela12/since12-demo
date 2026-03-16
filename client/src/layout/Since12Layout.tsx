import { Outlet, NavLink, useLocation } from 'react-router-dom';
import LordIcon from '@/components/LordIcon';
import TickerBar from '@/components/TickerBar';

const NAV_ITEMS = [
  { to: '/', icon: 'system-regular-41-home-hover-pinch', label: 'HOME' },
  { to: '/watch/s1', icon: 'system-regular-107-tv-hover-tv', label: 'WATCH' },
  { to: '/drops', icon: 'system-regular-64-shopping-bag-hover-shopping-bag-1', label: 'DROPS' },
  { to: '/dashboard', icon: 'system-regular-194-screen-share-hover-screen-share-1', label: 'DASHBOARD' },
  { to: '/channel/c3', icon: 'system-regular-96-groups-hover-groups', label: 'CHANNEL' },
];

export default function Since12Layout() {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Dark sidebar — desktop */}
      <aside className="sidebar-desktop" style={{
        width: 72,
        background: 'var(--sidebar-bg)',
        borderRight: '3px solid var(--sidebar-border)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        gap: 8,
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 50,
      }}>
        {/* Brand mark */}
        <div style={{
          width: 44, height: 44, border: '2px solid var(--sidebar-accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 20,
        }}>
          <span className="font-space-mono" style={{ fontSize: 10, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
            S12
          </span>
        </div>

        {/* Nav items */}
        {NAV_ITEMS.map((item) => {
          const isActive = item.to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.to.split('/').slice(0, 2).join('/'));
          return (
            <NavLink
              key={item.to}
              to={item.to}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 4,
                padding: '8px 4px',
                textDecoration: 'none',
                borderLeft: isActive ? '3px solid var(--sidebar-accent)' : '3px solid transparent',
                width: '100%',
                paddingLeft: isActive ? 9 : 12,
                background: isActive ? 'var(--sidebar-hover)' : 'transparent',
                transition: 'background 100ms ease-out',
              }}
              onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'var(--sidebar-hover)'; }}
              onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <div style={{
                filter: isActive
                  ? 'brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(1000%) hue-rotate(319deg) brightness(101%) contrast(101%)'
                  : 'brightness(0) invert(1)',
                opacity: isActive ? 1 : 0.5,
              }}>
                <LordIcon name={item.icon} size={22} trigger="hover" />
              </div>
              <span className="font-space-mono" style={{
                fontSize: 7,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: isActive ? 'var(--sidebar-accent)' : 'var(--sidebar-text)',
              }}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </aside>

      {/* Main content area */}
      <div style={{ flex: 1, marginLeft: 72, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TickerBar />
        <main className="page-reveal" style={{ flex: 1, padding: '24px 32px', maxWidth: 1200, width: '100%', margin: '0 auto' }}>
          <Outlet />
        </main>
      </div>

      {/* Mobile bottom dock */}
      <nav className="mobile-dock" style={{
        display: 'none',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'var(--sidebar-bg)',
        borderTop: '3px solid var(--sidebar-border)',
        zIndex: 50,
        justifyContent: 'space-around',
        padding: '8px 0 12px',
      }}>
        {NAV_ITEMS.map((item) => {
          const isActive = item.to === '/'
            ? location.pathname === '/'
            : location.pathname.startsWith(item.to.split('/').slice(0, 2).join('/'));
          return (
            <NavLink
              key={item.to}
              to={item.to}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                textDecoration: 'none',
              }}
            >
              <div style={{
                filter: isActive
                  ? 'brightness(0) saturate(100%) invert(56%) sepia(88%) saturate(1000%) hue-rotate(319deg)'
                  : 'brightness(0) invert(1)',
                opacity: isActive ? 1 : 0.5,
              }}>
                <LordIcon name={item.icon} size={20} trigger="hover" />
              </div>
              <span className="font-space-mono" style={{
                fontSize: 7, fontWeight: 700, textTransform: 'uppercase',
                color: isActive ? 'var(--sidebar-accent)' : 'var(--sidebar-text)',
              }}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
          .mobile-dock { display: flex !important; }
          main { margin-left: 0 !important; padding-bottom: 80px !important; }
          div[style*="marginLeft: 72"] { margin-left: 0 !important; }
        }
      `}</style>
    </div>
  );
}
