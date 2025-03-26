import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()], // Only include react plugin
    base: '/ecoswaphub/',
    resolve: {
      dedupe: ['react', 'react-dom'],
      alias: {
        '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
      },
    },
  };
});