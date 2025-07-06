<script setup lang="ts">
const props = defineProps<{
    to: string;
}>();
</script>

<template>
    <NuxtLink class="scroll-button" :to="props.to">
        <Icon name="material-symbols:keyboard-arrow-down" />
    </NuxtLink>
</template>