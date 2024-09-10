import { defineNuxtConfig } from 'nuxt/config'
import any from "async-validator/dist-types/validator/any";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL,
    },
    plugins: [
      '~/plugins/vue3-toastify.client.js',
    ],
  },
})