// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    future: { compatibilityVersion: 4 },

    css: ['~/assets/css/main.css'],

    modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@nuxtjs/mdc', '@nuxtjs/seo'],

    devServer: {
        host: '0.0.0.0',
        port: 3000
    },

    mdc: {
        highlight: {
            theme: 'github-light',
            langs: ['js', 'ts', 'html', 'css', 'json', 'bash']
        },
        components: {
            map: { img: 'ExternalImage' }
        }
    },

    runtimeConfig: {
        public: {
            backgroundImage: '/img/background.jpg',
            crispWebsiteId: '00d37c08-ee9e-4812-a4fe-1cdff160b835' // ← your Crisp ID
        }
    },

    vite: {
        optimizeDeps: { include: ['debug'] }
    },

    app: {
        head: {
            htmlAttrs: { lang: 'en' },

            // Crisp script – works perfectly in Nuxt 4
            script: [
                {
                    type: 'text/javascript',
                    // We read the runtime config at build/dev time (server-side)
                    innerHTML: `
            window.$crisp = [];
            window.CRISP_WEBSITE_ID = "${process.env.NUXT_PUBLIC_CRISP_WEBSITE_ID || '00d37c08-ee9e-4812-a4fe-1cdff160b835'}";
            (function () {
              var d = document;
              var s = d.createElement("script");
              s.src = "https://client.crisp.chat/l.js";
              s.async = true;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `.trim()
                }
            ]
        }
    },

    site: {
        name: "VanillyNeko's website",
        description: 'VanillyNeko is a variety streamer, cosplayer, content creator, coder, avatar creator and server host.',
        url: 'https://vanillyneko.com',
        image: '/img/logo.png',
        defaultLocale: 'en'
    },

    ogImage: { enabled: false }
})