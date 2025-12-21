<script setup lang="ts">
definePageMeta({
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' }
});

const { signIn, getProviders } = useAuth();
</script>

<template>
    <main class="container bg-image bg-tertiary-wallpaper center gap-2xl">
        <h1 class="font-6xl">Authentication Error</h1>
        <p class="font-xl text-center">
            An error occurred during authentication. Please try again.
        </p>
        <NuxtLink to="/auth/login" class="btn btn-primary font-lg">
            Back to Login
        </NuxtLink>
    </main>
</template>