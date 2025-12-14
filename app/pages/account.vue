<script setup lang="ts">
definePageMeta({
    auth: true
});

const { data, signOut } = useAuth();
</script>

<template>
    <main class="center container gap-xl bg-image bg-tertiary-wallpaper">
        <div>
            <h1 class="font-6xl">Your Account</h1>
            <h3 class="font-3xl text-center">
                Welcome back, {{ data?.user?.name }}!
            </h3>
        </div>
        <ul class="account-info font-xl">
            <li>
                <span>Name</span>
                <span>{{ data?.user?.name }}</span>
            </li>
            <li>
                <span>Email</span>
                <span>{{ data?.user?.email }}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-lg" @click="signOut()">
            Sign Out
        </button>
    </main>
</template>