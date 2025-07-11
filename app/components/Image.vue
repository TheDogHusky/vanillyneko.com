<script setup lang="ts">
import type { ImageProps } from "~/types/image";

const props = defineProps<ImageProps>();
</script>

<template>
    <a
        v-if="props.allowExternal"
        :href="props.src"
        target="_blank"
        rel="noopener noreferrer"
        class="image-link"
    >
        <NuxtImg
            v-bind="props"
            class="image"
        />
    </a>
    <NuxtImg
        v-else
        v-bind="props"
        class="image"
    />
</template>