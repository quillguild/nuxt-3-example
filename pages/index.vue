<template>
    <div class="relative bg-white py-16">
        <div class="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
        <div class="mx-auto max-w-7xl bg-stone-800 lg:bg-transparent lg:px-8">
            <div class="lg:grid lg:grid-cols-12">
                <div class="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
                    <div class="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
                    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                        <div class="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                            <NuxtImg quality="80" format="webp" class="rounded-3xl object-cover object-center shadow-2xl" :src="`${config.CDN}/page/patrick-fore-59lC6TgZAbQ-unsplash.jpg`" alt="" sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536 '2xl':1536px" />
                        </div>
                    </div>
                </div>

                <div class="relative bg-stone-800 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
                    <div class="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                        <svg class="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-stone-600" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>
                        <svg class="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                            <defs>
                                <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <rect x="0" y="0" width="4" height="4" class="text-stone-600" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                        </svg>
                    </div>
                    <div class="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                        <NuxtImg width="100" height="100" class="h-10 w-auto" :src="`${config.CDN}/quillguild.svg`" :alt="$t('indexHeader')" />
                        <h2 class="text-3xl font-bold tracking-tight text-white" id="join-heading">
                            {{ $t('indexHeader') }}
                        </h2>
                        <p class="text-lg text-white">
                            {{ $t('indexIntro') }}
                        </p>
                        <p class="text-lg text-white">
                            {{ $t('indexSoon') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
