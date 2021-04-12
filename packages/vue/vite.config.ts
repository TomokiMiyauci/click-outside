import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const baseDir = resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  resolve: {
    alias: {
      '@': baseDir,
      '@share': resolve(__dirname, '..', 'shared', 'src')
    }
  },

  build: {
    lib: {
      entry: resolve(baseDir, 'index.ts'),
      name: 'MyLib'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        sourcemap: true,
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
