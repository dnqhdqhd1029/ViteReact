import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
    }),
    tsconfigPaths(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/locales',
          dest: '',
        },
      ],
    }),
  ],
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    minify: true,
    rollupOptions: {
      treeshake: false,
    },
    sourcemap: true
  },
  server: {
    // @ts-ignore
    sourcemap: true
  },
  resolve: {
    alias: {
      '@': '/src',
      '@/assets': '/src/assets'
    },
  }
});
