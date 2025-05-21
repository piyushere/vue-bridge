import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    federation({
      name: '@piyux/app',
      filename: 'remoteEntry.js',
      exposes: {
        './v3': './src/main.ts',
      },
      shared: [],
    }),
  ],
  base: 'http://localhost:4173/',
  build: {
    assetsDir: 'assets/v3',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
