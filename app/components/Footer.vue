<script setup lang="ts">
const copyrightYear = new Date().getFullYear();
</script>

<template>
    <footer>
        <p>
            We do provide software and other services that are all secure and honest. There are no viruses in our software and we are not trying to steal information. Read our <NuxtLink to="/privacy">Privacy Policy</NuxtLink> for any additional information needed!
        </p>
        <nav class="footer-links">
            <NuxtLink to="/status">Server Status</NuxtLink>
            <NuxtLink to="/contact">Contact Us</NuxtLink>
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
        </nav>
        <p>&copy; {{ copyrightYear }} VanillyNeko. All rights reserved.</p>
    </footer>
</template>