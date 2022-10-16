import { createPersistedStatePlugin } from 'pinia-plugin-persistedstate-2';
import Cookies from 'js-cookie';
import cookie from 'cookie';
import { defineNuxtPlugin } from "#imports";

export default defineNuxtPlugin(({ $pinia, ssrContext }) => {
    $pinia.use(
        createPersistedStatePlugin({
            // plugin options goes here
            storage: {
                getItem: (key) => {
                    // See https://nuxtjs.org/guide/plugins/#using-process-flags
                    if (process.server) {
                        const parsedCookies = cookie.parse(ssrContext.req.headers.cookie);
                        return parsedCookies[key];
                    } else {
                        return Cookies.get(key);
                    }
                },
                // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
                setItem: (key, value) => {
                    Cookies.set(key, value, {expires: 30, sameSite: 'strict', secure: true});
                },
                removeItem: (key) => {
                    Cookies.remove(key);
                },
            },
        }),
    );
});
