<template>
    <NuxtLayout>
        <Head>
            <Title></Title>
            <Meta name="description" :content="description" />
            <Link rel="icon" type="image/svg+xml" :href="`${config.CDN}/quillguild.svg`" />
        </Head>
        <LoadingBar :duration="1000" />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRequestHeaders, useRuntimeConfig } from "#imports";
import { useRoute } from "vue-router";
import { computed } from "vue";
import LoadingBar from "@/components/loading-bar";

const config = useRuntimeConfig();
const i18n = useI18n();

const domain = useState('domain', () => config.DOMAIN_EN);

if (process.server) {
    const hostHeader = useRequestHeaders(['host']);
    domain.value = hostHeader.host;
}

if (domain.value === config.DOMAIN_PL) {
    i18n.locale.value = 'pl_PL';
} else {
    i18n.locale.value = 'en_US';
}

const route = useRoute();
const path = computed(() => route.path)

const isNotHomePage = route.name !== 'index' && typeof route.name !== 'undefined';

if (isNotHomePage) {
    const keyFromLocale = i18n.t(route.name + 'Url');
    const urlDoesntMatch = path.value !== i18n.t(route.name + 'Url');
    const keyExistsInLocale = keyFromLocale !== route.name + 'Url';

    if (urlDoesntMatch && keyExistsInLocale) {
        navigateTo(keyFromLocale, {redirectCode: 301, replace: true});
    }
}

const title = i18n.t('title');
const description = i18n.t('description');

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - ${title}` : title;
    }
});

useMeta({
    meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
    ],
    htmlAttrs: {
        class: 'h-full bg-white'
    },
    bodyAttrs: {
        class: 'h-full bg-white'
    }
});
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>
