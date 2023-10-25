// https://nuxt.com/docs/api/configuration/nuxt-config
import wasm from 'vite-plugin-wasm';

export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [wasm()],
    build: {
      target: "esnext"
    }
  }
})
