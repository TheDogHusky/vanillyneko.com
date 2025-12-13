<script setup lang="ts">
// @ts-ignore
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
});

console.error('Error:', props.error);

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <main v-if="error.statusCode === '404'" class="container bg-red-200 center gap-2xl">
        <h1 class="font-8xl">Oops! An error occured.</h1>
        <p class="font-4xl">
            Don't worry, it's probably not your fault.<br>
            If the issue persists, please <NuxtLink to="/contact">contact us</NuxtLink>.
        </p>
        <button class="btn btn-primary btn-lg" @click="handleError">Go back home</button>
        <p class="error-details">Error code: {{ error.statusCode }}</p>
    </main>
    <main v-else class="container bg-red-200 center gap-2xl">
        <h1 class="font-8xl">404, page not found.</h1>
        <p class="font-4xl">
            Oops! It looks like the content or ressource you're trying to access does not exist.<br>
            If you think this is an error, please <NuxtLink to="/contact">contact us</NuxtLink>.
        </p>
        <button class="btn btn-primary btn-lg" @click="handleError">Go back home</button>
        <p class="error-details">Error code: {{ error.statusCode }}</p>
    </main>
</template>