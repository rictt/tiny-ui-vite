import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJSX from "@vitejs/plugin-vue-jsx"
import Unocss from "./config/unocss";

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue"
    }
  }
}

export default defineConfig({
  // 生产build配置
  build: {
    cssCodeSplit: true,
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "TinyUIVite",
      fileName: "tiny-ui-vite",
      formats: ["es", "umd", "iife"]
    }
  },
  plugins: [
    vue(),
    vueJSX({}),
    Unocss()
  ]
})
