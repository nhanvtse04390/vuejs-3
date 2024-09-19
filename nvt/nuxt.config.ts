import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Danh sách các modules sử dụng
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // Cấu hình biến runtime
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE // Base URL cho public
    }
  },

  // Cấu hình plugins
  plugins: [
    '~/plugins/vue3-toastify.client.js',
    '~/plugins/element-plus.js'
  ],

  // Tắt SSR nếu muốn chỉ sử dụng client-side rendering
  ssr: false
})
