import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { '@': '/src' }
  },
  server: {
    port: 5180,
    proxy: {
      '/api': 'http://localhost:3002'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          recharts: ['recharts'],
          lottie: ['lottie-react', 'lottie-web'],
          mux: ['@mux/mux-player-react'],
          router: ['react-router-dom'],
        }
      }
    }
  }
});
