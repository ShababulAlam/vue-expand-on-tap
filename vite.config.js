import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "vue-expand-on-tap",
      fileName: (format) => `${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  plugins: [vue()],

})
