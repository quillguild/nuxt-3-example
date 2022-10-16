import { createI18n } from 'vue-i18n'
import en_US from '@/locales/en_US.json'
import pl_PL from '@/locales/pl_PL.json'
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en_US',
        messages: {
            en_US,
            pl_PL
        }
    })

    vueApp.use(i18n);
})
