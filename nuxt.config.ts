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

    modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/mdc', '@nuxtjs/seo'],

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
            backgroundImage: '/img/background.jpg',
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
    },

    site: {
        name: 'VanillyNeko\'s website',
        description: 'VanillyNeko is a variety streamer, cosplayer, content creator, coder, avatar creator and server host.',
        url: 'https://vanillyneko.com',
        image: '/img/logo.png',
        defaultLocale: 'en'
    },

    ogImage: {
        enabled: false
    }
});