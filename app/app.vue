<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const wallpaper = runtimeConfig.public.backgroundImage;
</script>

<template>
    <div :style="{ '--background-image': 'url(\'' + wallpaper + '\');' }">
        <Header />
        <NuxtLoadingIndicator />
        <NuxtPage />
        <Footer />
    </div>
</template>
