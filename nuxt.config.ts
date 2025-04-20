import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-11-01',
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'stylesheet',
          href: 'https://use.typekit.net/tye1eri.css',
        },
      ],
    },
  },
  css: [
    '~/assets/css/global.css', // ✅ Keep global styles only
  ],
  modules: ['@nuxtjs/tailwindcss', '@vee-validate/nuxt'],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      hmr: {
        port: 3000, // Make sure this port matches your Nuxt server port
        clientPort: 3000, // Ensure this matches your Nuxt server port as well
      },
    },
  },
  devtools: { enabled: false },
})
