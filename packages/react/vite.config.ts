import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const baseDir = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': baseDir
    }
  },

  plugins: [reactRefresh()],

  build: {
    lib: {
      entry: resolve(baseDir, 'index.ts'),
      name: 'ReactClickOutside'
    },
    rollupOptions: {
      external: ['react'],
      output: {
        sourcemap: true,
        globals: {
          react: 'React'
        }
      }
    }
  }
})
