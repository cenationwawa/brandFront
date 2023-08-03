// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue';
 import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    // Components({
    //   resolvers: [VantResolver()],
    // })
  ],
  resolve: {
    alias: {
      // '@': resolve(__dirname, './src')
      
            '@': path.resolve('./src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "@/styles/constant.scss";'
      }
    }
  }
});