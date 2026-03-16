import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Since12Layout from '@/layout/Since12Layout';

const Login = lazy(() => import('@/pages/Login'));
const Home = lazy(() => import('@/pages/Home'));
const Watch = lazy(() => import('@/pages/Watch'));
const Drop = lazy(() => import('@/pages/Drop'));
const Drops = lazy(() => import('@/pages/Drops'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Channel = lazy(() => import('@/pages/Channel'));

function LoadingFallback() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      minHeight: '60vh',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: 60, height: 60, border: '3px solid var(--accent-coral)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 16px',
          animation: 'pulse-live 1.5s ease-in-out infinite',
        }}>
          <span className="font-space-mono" style={{ fontSize: 14, fontWeight: 700 }}>S12</span>
        </div>
        <span className="font-space-mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          LOADING...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<Since12Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:streamId" element={<Watch />} />
            <Route path="/drop/:dropId" element={<Drop />} />
            <Route path="/drops" element={<Drops />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/channel/:creatorId" element={<Channel />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
