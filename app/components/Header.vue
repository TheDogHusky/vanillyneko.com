<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <NuxtLink to="/" class="navbar-brand">
                <NuxtImg src="/logo.png" alt="VanillyNeko Logo" />
                <span>VanillyNeko</span>
            </NuxtLink>
            <ul class="navbar-items">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Donations</span>
                        </template>

                        <li>
                            <NuxtLink to="/about/team">Team</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about/history">History</NuxtLink>
                        </li>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Socials</span>
                        </template>

                        <li>
                            <NuxtLink to="/about/team">Team</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about/history">History</NuxtLink>
                        </li>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Services</span>
                        </template>

                        <li>
                            <NuxtLink to="/about/team">Team</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about/history">History</NuxtLink>
                        </li>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Logins</span>
                        </template>

                        <li>
                            <NuxtLink to="/about/team">Team</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about/history">History</NuxtLink>
                        </li>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Contact Us</span>
                        </template>
                        <li>
                            <NuxtLink to="/about/team">Team</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about/history">History</NuxtLink>
                        </li>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    </header>
</template>