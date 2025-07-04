<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <ul class="navbar-items">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Donations</span>
                        </template>
                        <ul>
                            <li>
                                <NuxtLink to="/about/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about/history">History</NuxtLink>
                            </li>
                        </ul>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Socials</span>
                        </template>
                        <ul>
                            <li>
                                <NuxtLink to="/about/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about/history">History</NuxtLink>
                            </li>
                        </ul>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Services</span>
                        </template>
                        <ul>
                            <li>
                                <NuxtLink to="/about/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about/history">History</NuxtLink>
                            </li>
                        </ul>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Logins</span>
                        </template>
                        <ul>
                            <li>
                                <NuxtLink to="/about/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about/history">History</NuxtLink>
                            </li>
                        </ul>
                    </Dropdown>
                </li>
                <li>
                    <Dropdown>
                        <template #trigger>
                            <span>Contact Us</span>
                        </template>
                        <ul>
                            <li>
                                <NuxtLink to="/about/team">Team</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/about/history">History</NuxtLink>
                            </li>
                        </ul>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    </header>
</template>