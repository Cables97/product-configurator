import { fileURLToPath, URL } from 'node:url'
import { templateCompilerOptions } from '@tresjs/core'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [vue({
    // Other config
    ...templateCompilerOptions
  })],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "./src/assets/global.scss";
          `,
        },
      },
    }, 



})
