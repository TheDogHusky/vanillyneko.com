<script setup lang="ts">
definePageMeta({
    auth: true,
    middleware: ['sidebase-auth']
});

const { data, signOut } = useAuth();
console.log(data.value?.user);
const manageAccountURL = useRuntimeConfig().public.keycloackIssuer + "/account";

function logOut() {
    signOut({
        callbackUrl: '/'
    });
}
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
            <li>
                <span>Roles</span>
                <span>{{ data?.user?.roles.join(", ") }}</span>
            </li>
        </ul>
        <div class="btn-group">
            <a class="btn btn-lg btn-success" :href="manageAccountURL" target="_blank">Manage Account</a>
            <button class="btn btn-danger btn-lg" @click="logOut">
                Sign Out
            </button>
        </div>
    </main>
</template>