<script setup lang="ts">
definePageMeta({
    auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: '/' }
});

const { signIn } = useAuth();

signIn("keycloak", {
    callbackUrl: "/",
    redirect: true
});
</script>

<template>
    <main class="container bg-image bg-tertiary-wallpaper center gap-2xl">
        <h1 class="font-6xl">Log in</h1>
        <p class="font-3xl">Please wait.. You are being redirected..</p>
    </main>
</template>