// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },

    future: {
        compatibilityVersion: 4
    },

    css: [
        '~/assets/css/main.css'
    ],

    modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', 'nuxt-markdown-render'],

    devServer: {
        host: '0.0.0.0',
        port: 3000
    },

    runtimeConfig: {
        public: {
            backgroundImage: process.env.BACKGROUND_IMAGE || '/img/background.jpg',
        }
    }
});