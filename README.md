# SINCE I WAS 12 TV — Creator Livestream & Drop Platform

A brutalist-designed creator platform demo combining **livestreaming**, **exclusive product drops**, and **real-time community engagement**. Built as a functional prototype for the SINCE I WAS 12 TV brand.

## Live Demo

- **Frontend**: [https://since12-demo.netlify.app](https://since12-demo.netlify.app)
- **Login**: `/login` — click "LOG IN" to enter (no auth required for demo)

## Screenshots

The platform features 7 distinct pages with a cohesive neobrutalist design language:
- **Login** — Split-screen with brand showcase
- **Home** — Featured livestream + drops grid + schedule
- **Watch** — Mux video player + live chat (two-column)
- **Drops** — All active and sold-out drops
- **Drop Detail** — Countdown timer + product info + pre-drop chat
- **Creator Dashboard** — Go-live controls, analytics, stream health, moderation
- **Channel** — Creator profile with stats, drops, and stream history

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | React 19 + Vite 6 | Fast dev, great code splitting |
| Language | TypeScript (strict) | Type safety throughout |
| Styling | Tailwind CSS v4 | Zero-config via `@tailwindcss/vite` |
| Video | `@mux/mux-player-react` | HLS streaming, test playback IDs |
| Icons (animated) | LordIcon via `lottie-react` | 349 animated icons with hover triggers |
| Icons (static) | `@tabler/icons-react` | Consistent brutalist aesthetic |
| Charts | Recharts | Viewer analytics in dashboard |
| Routing | `react-router-dom` v7 | Lazy-loaded routes |

## Design System — Neobrutalism

### Philosophy
Inspired by Off-White, SSENSE, and Supreme — **brutalist design IS the Gen Z creator aesthetic**. The design follows NNGroup's neobrutalism guidelines: 2-3 bold colors max, hard shadows, zero border-radius, and hierarchy through size (not decoration).

### Color Palette
```
BLACK    #000000   Borders, text, active states
CORAL    #FF6B6B   LIVE indicators, warnings, urgency
YELLOW   #FFCC00   CTA buttons, highlights, ticker
```

### Typography
| Role | Font | Usage |
|---|---|---|
| Headlines | Instrument Serif | Page titles, creator names |
| Data/Labels | Space Mono | Viewer counts, countdowns, badges |
| Body | Recursive | Descriptions, chat messages |

### Component System
- `.card-brutal` — 3px border + hard shadow + hover lift
- `.btn-brutal` — Shadow press effect on click
- `.brutal-badge` — Status indicators (coral/yellow/black/green)
- `.sticker` — Inline tags with optional rotation
- `.ticker` — Infinite marquee with live data

## Project Structure

```
since12-demo/
├── client/
│   ├── src/
│   │   ├── App.tsx                     # Router with lazy-loaded routes
│   │   ├── index.css                   # Tailwind v4 + font imports
│   │   ├── theme.css                   # CSS variables + keyframes + components
│   │   ├── mux-player.css              # Mux player brutalist overrides
│   │   ├── components/
│   │   │   ├── LordIcon.tsx            # Animated nav icons (lottie-react)
│   │   │   ├── StreamPlayer.tsx        # Mux player wrapper with overlays
│   │   │   ├── ChatPanel.tsx           # Live chat with badges + auto-scroll
│   │   │   ├── CountdownTimer.tsx      # Drop countdown (sm/lg formats)
│   │   │   ├── DropCard.tsx            # Product card with FOMO elements
│   │   │   ├── CreatorCard.tsx         # Creator mini-profile
│   │   │   ├── LiveBadge.tsx           # Pulsing LIVE indicator
│   │   │   ├── ViewerCount.tsx         # Real-time viewer display
│   │   │   ├── InventoryBar.tsx        # Depleting quantity bar
│   │   │   ├── StatBlock.tsx           # Dashboard metric card
│   │   │   ├── HypeMeter.tsx           # Chat engagement meter
│   │   │   └── TickerBar.tsx           # Marquee ticker
│   │   ├── layout/
│   │   │   └── Since12Layout.tsx       # Dark sidebar + ticker + mobile dock
│   │   ├── pages/
│   │   │   ├── Login.tsx               # Split-screen login
│   │   │   ├── Home.tsx                # Featured stream + drops + schedule
│   │   │   ├── Watch.tsx               # Player + chat + drop overlay
│   │   │   ├── Drop.tsx                # Countdown + product + pre-drop chat
│   │   │   ├── Drops.tsx               # All drops grid
│   │   │   ├── Dashboard.tsx           # Creator control room
│   │   │   └── Channel.tsx             # Creator profile page
│   │   ├── data/                       # Mock data layer
│   │   │   ├── types.ts                # TypeScript interfaces
│   │   │   ├── creators.ts             # 5 mock creators
│   │   │   ├── streams.ts              # 6 live/scheduled + 3 past streams
│   │   │   ├── drops.ts                # 4 active + 3 sold-out drops
│   │   │   └── chat.ts                 # 50 mock chat messages
│   │   └── hooks/
│   │       ├── useMousePosition.ts     # Cursor tracking
│   │       ├── useMockChat.ts          # Timer-based fake chat (1.8-5s)
│   │       ├── useCountdown.ts         # DD:HH:MM:SS countdown
│   │       └── useInventory.ts         # Simulated depleting stock
│   └── public/
│       ├── icons/lordicon/             # 349 animated icon JSONs
│       └── animations/rive/           # 12 Rive animations
└── SINCE12_DEMO_PLAN.md               # Full specification document
```

## Key Features

### Livestreaming (Mux)
- HLS video player with brutalist CSS overrides
- LIVE badge with CSS pulse animation
- Real-time viewer count display
- Test playback ID for demo: `EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs`

### Drop Mechanics (SNKRS-inspired)
- **State machine**: UPCOMING → NOTIFY ME → LIVE → SOLD OUT
- Countdown timers (Days:Hours:Minutes:Seconds)
- Depleting inventory bars (simulated for demo)
- "X PEOPLE WAITING" counter
- FOMO elements: sold-out overlays, time-to-sellout display

### Real-Time Chat
- Mock chat system with 50+ pre-written messages
- Timer-based message injection (1.8-5s intervals)
- Badge system: CREATOR, MOD, VIP, SUBSCRIBER
- Auto-scroll with smooth behavior
- Striped alternating row backgrounds

### Creator Dashboard
- Live stream preview with Mux player
- Stream health monitoring (bitrate, FPS, resolution)
- Go Live / End Stream toggle
- Viewer analytics chart (Recharts AreaChart)
- Stream settings (title, category, tags)
- Stream key display with show/copy functionality
- Chat moderation panel
- Recent streams history

### Navigation
- Dark sidebar with LordIcon animated icons (hover-triggered)
- Active state highlighting with coral accent
- Mobile bottom dock for responsive layout
- Yellow marquee ticker with live data

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Development

```bash
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5180`.

### Production Build

```bash
cd client
npm run build
npm run preview
```

Build output is in `client/dist/` — optimized with vendor chunk splitting (recharts, lottie, mux, router).

## Deployment

### Netlify (Frontend)
```bash
cd client
npm run build
# Deploy dist/ to Netlify
# Add _redirects file for SPA routing:
# /*  /index.html  200
```

### Environment Variables
No environment variables required for the frontend demo — all data is mocked client-side.

For production with a real backend:
- `VITE_SUPABASE_URL` — Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key
- `MUX_TOKEN_ID` — Mux API token (server-side)
- `MUX_TOKEN_SECRET` — Mux API secret (server-side)

## Architecture Decisions

1. **Tailwind CSS v4 Layering** — CSS variables and keyframes are defined outside `@layer` to avoid specificity conflicts. Component classes live inside `@layer components`. This follows the proven pattern from the PrintAI OS project.

2. **Mock Data over Backend** — The demo uses client-side mock data to eliminate deployment complexity. The data layer (`src/data/`) mirrors the shape of real Supabase tables, making migration straightforward.

3. **Lazy-Loaded Routes** — Every page uses `React.lazy()` + `Suspense` for optimal code splitting. Dashboard (with Recharts) and Watch (with Mux) are the heaviest chunks and benefit most from this.

4. **LordIcon via lottie-react** — Instead of LordIcon's proprietary web component, we use `lottie-react` to load the same JSON animations. This gives us full React control over triggers (hover, click, loop).

## Tailwind v4 CSS Strategy

```
index.css
├── Google Fonts + Fontshare imports
├── @import "tailwindcss"
├── @layer base     → resets, body styles, scrollbar
└── @layer components → font utilities

theme.css (separate file, imported after)
├── :root            → CSS variables (OUTSIDE @layer)
├── @keyframes       → animations (OUTSIDE @layer)
└── @layer components → .card-brutal, .btn-brutal, etc.
```

## Credits

- Design system: Neobrutalism principles from NNGroup research
- Icons: [LordIcon](https://lordicon.com/) (animated) + [Tabler Icons](https://tabler.io/icons) (static)
- Video: [Mux](https://mux.com/) test streams
- Typography: Google Fonts + Fontshare
- Inspiration: NTWRK, Whatnot, SNKRS, Off-White, SSENSE

---

Built with React 19 + Vite 6 + Tailwind CSS v4 + TypeScript
