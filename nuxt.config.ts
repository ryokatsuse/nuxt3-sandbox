import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // 追加
  css: ["@/assets/css/tailwind.css"],
  modules: ["@nuxt/image-edge", "@nuxtjs/tailwindcss"],

  // 追加
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
});