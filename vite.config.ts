import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unocss from '@unocss/vite';

export default defineConfig(configEnv => {
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`);

  const isBuildLib = viteEnv.VITE_LIB_MODE === '1';

  return {
    plugins: [
      vue(),
      vueJsx({
        transformOn: true
      }),
      unocss()
    ],
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: isBuildLib
      ? {
          copyPublicDir: false,
          lib: {
            entry: path.resolve(process.cwd(), 'src/index.ts'),
            name: '@souljs/vue-admin-layout',
            fileName: 'index',
            formats: ['es', 'cjs']
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue'
              }
            }
          }
        }
      : {}
  };
});
