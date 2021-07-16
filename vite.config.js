import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      name: 'Khatam',
      short_name: 'Khatam',
      display: 'minimal-ui',
      icons: [{
        src: '/quran.png',
        sizes: '512x512',
        type: 'image/png'
      }]
    }
  })]
})
