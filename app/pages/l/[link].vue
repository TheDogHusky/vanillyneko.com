<script setup lang="ts">
const link = useRoute().params.link as string;

const response = await $fetch(`/api/links/${encodeURIComponent(link)}`, {
    method: 'GET',
    credentials: 'include'
}).catch(() => null);

const redirect = response && response.redirect ? response.redirect : null;

if (redirect) {
    await navigateTo(redirect, { external: true, redirectCode: 302 });
} else {
    await navigateTo('/' + toastInURL("warning", "Link not found", "The link you are trying to access does not exist, or you don't have access to it."));
}
</script>

<template>
    <main class="container bg-image bg-tertiary-wallpaper center gap-2xl">
        <h1 class="font-6xl">Redirecting</h1>
        <p class="font-3xl">Please wait.. You are being redirected..</p>
        <p class="font-3xl">If you are not redirected automatically, please <a :href="response?.redirect" target="_blank" class="underline">click here</a>.</p>
    </main>
</template>