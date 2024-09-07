import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove 'react-router-dom' and 'axios' from the 'external' array
      external: [],
    },
  },
});
