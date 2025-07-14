<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const wallpaper = runtimeConfig.public.backgroundImage;
</script>

<template>
    <div :style="{ '--background-image': 'url(\'' + wallpaper + '\');' }">
        <Header />
        <NuxtLoadingIndicator :height="2" color="#ef9999" />
        <NuxtPage />
        <Footer />
    </div>
</template>
