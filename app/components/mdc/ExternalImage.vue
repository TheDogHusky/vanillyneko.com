<script setup lang="ts">
// Just a wrapper around Image to by default allow external open in new tab
import type { ImageProps } from "~/types/image";

const props = defineProps<ImageProps>();
</script>

<template>
    <Image v-bind="props" allow-external />
</template>