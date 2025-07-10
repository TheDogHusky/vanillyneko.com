<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const wallpaper = runtimeConfig.public.backgroundImage;

// TODO add mobile support
</script>

<template>
    <div :style="{ '--background-image': 'url(\'' + wallpaper + '\');' }">
        <Header />
        <NuxtLoadingIndicator />
        <NuxtPage />
        <Footer />
    </div>
</template>
