import { defineConfig } from 'vite'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [vike()],
  ssr: {
    noExternal: [
      /^primereact/,
      /^react-bootstrap/,
      /^@restart/,
      /^dom-helpers/,
      /^react-overlays/,
      /^react-transition-group/
    ]
  },
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
        /react-transition-group/
      ]
    },
    cssCodeSplit: true,  // Ensures CSS loads properly

    rollupOptions: {
      output: {
        manualChunks: undefined // Disables automatic chunk splitting
      }
    }

  }
})