import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Set base to root for Vercel
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
});