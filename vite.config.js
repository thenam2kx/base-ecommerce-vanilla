import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }
})