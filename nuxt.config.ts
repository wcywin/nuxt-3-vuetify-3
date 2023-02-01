import vuetifyVitePlugin from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ], // vuetify includes precompiled css from original lib
  vite: {
    ssr: {
      noExternal: ['vuetify']
    },
  },
  modules: [
    async (options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
        vuetifyVitePlugin()
      ))
    },
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_BASE_URL || 'https://jsonplaceholder.typicode.com'
    }
  }
})
