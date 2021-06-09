import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base:"/motz/",
  plugins: [reactRefresh()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: /@\//, replacement: path.resolve(__dirname, 'src') }
    ]
  },
 
})
