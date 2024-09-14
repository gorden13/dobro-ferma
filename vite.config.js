import { resolve } from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig, loadEnv } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
// import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    plugins: [
      vue(),
      // visualizer({ brotliSize: true, gzipSize: true, sourcemap: true }),
      // htmlPurge([htmlPurge()]),
    ],
    build: {
      rollupOptions: {
        output: {
          globals: {
            vue: 'Vue',
          },
          exports: 'named',
        },
      },
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use 'sass:math';
        `,
        },
      },
    },
  };
});
