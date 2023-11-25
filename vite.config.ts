import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    assetsDir: 'static',
    outDir: 'build',
    sourcemap: true
  },
  server: { port: 3000, },
  preview: { port: 3000, }
})
