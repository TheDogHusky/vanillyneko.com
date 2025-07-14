<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const wallpaper = runtimeConfig.public.backgroundImage;
</script>

<template>
    <div class="main-wallpaper">
        <Image
            :src="wallpaper"
            alt="Main Wallpaper"
            loading="lazy"
            placeholder
            format="webp"
        />
    </div>
</template>