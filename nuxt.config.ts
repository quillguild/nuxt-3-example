import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    server: {
        port: 3000,
        host: 'http://dev.example.com',
    },
    css: ['~/assets/css/tailwind.css'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    modules: [
        '@nuxt/image-edge',
    ],
    buildModules: [
        '@pinia/nuxt',
    ],
    image: {
        domains: [
            'cdn.quillguild.com',
            'cdn-dev.quillguild.com',
        ],
    },
    publicRuntimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL,
        DEVICE_NAME: process.env.DEVICE_NAME,
        DOMAIN_EN: process.env.DOMAIN_EN,
        DOMAIN_PL: process.env.DOMAIN_PL,
        HTTP: process.env.NODE_ENV !== 'production' ? 'http://' : 'https://',
        CDN: process.env.NODE_ENV !== 'production' ? 'https://cdn-dev.quillguild.com' : 'https://cdn.quillguild.com',
        VERSION: process.env.VERSION,
        HTTPS: process.env.HTTPS,
    },
});
