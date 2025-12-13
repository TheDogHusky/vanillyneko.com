<script setup lang="ts">
</script>

<template>
    <main class="container bg-dark min-h-10xl">
        <h1 class="font-6xl">Zelle Guide</h1>
    </main>

    <section class="container min-h-screen bg-image bg-tertiary-wallpaper gap-2xl">
        <Icon name="simple-icons:zelle" class="title-icon" />
        <h2 class="font-5xl">Zelle Guide</h2>
        <p class="font-xl">Zelle is a payment service used by many banks in the US for instant bank-to-bank money transfers with 0 fees.</p>
            <div class="padding-lg center container gap-lg">
                <h3 class="font-2xl text-center mb-10 text-gray-800 dark:text-white">
                    How to send in 3 steps
                </h3>
                <ol class="font-xl">
                    <li>Open your bank app</li>
                    <li>Navigate to <strong>Pay & Transfer -> Zelle</strong></li>

                    <li>Tap “Send”</li>
                    <li>Enter: <code>nilly@vanillyneko.com</code></li>
                    <li>Add amount + note (e.g. "Thanks Neko!")</li>
                    <li>Tap "Send"</li>
                </ol>
                <div>
                    <strong>Important note:</strong><br>
                    Only send this if you are 100% sure! Zelle payments are instant and irreversible!
                </div>
            </div>
    </section>
</template>