import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pet_Adoption/', // Replace <repo-name> with your repository name
  build: {
    outDir: 'dist',
  },
});
