<script setup lang="ts">
// @ts-ignore
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <main>
        <div class="container">
            <h1>Error {{ props.error?.statusCode }}</h1>
            <p>{{ props.error?.message }}</p>
            <button @click="handleError">Go to Home</button>
        </div>
    </main>
</template>