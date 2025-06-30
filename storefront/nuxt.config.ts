// https://nuxt.com/docs/api/configuration/nuxt-config
import { config } from 'dotenv'
config()

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
  ],

  runtimeConfig: {
    public: {
      medusaBackendUrl: process.env.NUXT_PUBLIC_MEDUSA_BACKEND_URL,
      medusaPublishableKey: process.env.NUXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
    },
  },
});
