import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/webcomponent.tsx',
      name: 'ShellWidget',
      fileName: 'shell-widget',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    outDir: 'dist-webcomponent',
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
});

