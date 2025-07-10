// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {
        enabled: true
    },

    future: {
        compatibilityVersion: 4
    },

    css: [
        '~/assets/css/main.css'
    ],

    modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/mdc'],

    devServer: {
        host: '0.0.0.0',
        port: 3000
    },

    mdc: {
        highlight: {
            theme: 'github-light',
            langs: ['js', 'ts', 'html', 'css', 'json', 'bash']
        }
    },

    runtimeConfig: {
        public: {
            backgroundImage: process.env.BACKGROUND_IMAGE || '/img/background.jpg',
        }
    },

    vite: {
        optimizeDeps: {
            include: ["debug"]
        }
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'en'
            }
        }
    }
});