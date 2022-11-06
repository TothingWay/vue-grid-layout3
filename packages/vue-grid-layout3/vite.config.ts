/*
 * @name:
 * @Author: wei.wang
 * @Date: 2022-10-24 17:54:01
 * @LastEditors: wei.wang
 * @LastEditTime: 2022-11-06 22:01:30
 */
import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, './src/components/index.ts'),
      fileName: 'vue-grid-layout3',
      name: 'Vue3GridLayout'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue()],
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src')
    }
  }
})
