import path from 'path'
import fs from 'fs'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.NODE_ENV === 'production' ? process.env.PROD_API_URL : process.env.DEV_API_URL,
      siteURL: process.env.NODE_ENV === 'production' ? process.env.PROD_SITE_URL : process.env.DEV_SITE_URL,
    }
  },
  devServer: {
    https: {
        key: fs.readFileSync(path.resolve(__dirname, 'server.key')).toString(),
        cert: fs.readFileSync(path.resolve(__dirname, 'server.crt')).toString()
    },
},
})