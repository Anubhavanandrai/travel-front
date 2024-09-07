

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'], // Ensure 'react-router-dom' is not listed here
    },
  },
});
