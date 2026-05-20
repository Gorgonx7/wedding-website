import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/wedding-website/', // For GitHub Pages at username.github.io/wedding-website/
  // Change to '/' if you're using a custom domain (and add CNAME file in public/)
})
