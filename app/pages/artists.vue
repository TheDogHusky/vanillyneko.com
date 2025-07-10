<script setup lang="ts">
import { artists } from "~/data/artists";
import { backgroundClasses } from "~/utils/functions";
</script>

<template>
    <main class="container bg-dark min-h-10xl">
        <h1 class="font-6xl">My Artists</h1>
    </main>
    <section
        v-for="(artist, i) in artists"
        :key="artist.name"
        class="container vertical-no-center min-h-screen"
        :class="backgroundClasses[i]"
    >
        <h2 class="font-6xl">{{ artist.name }}'s Art</h2>
        <div class="art-gallery">
            <div
                class="art-image-wrapper"
                v-for="(art, j) in artist.artwork"
                :key="j"
            >
                <img
                    :src="art as string"
                    :alt="`${artist.name}'s artwork ${j + 1}`"
                    class="art-image"
                />
            </div>
        </div>
        <div class="container padding-xl">
            <h3 class="font-6xl">Artist Contact</h3>
            <a class="font-4xl" :href="`mailto:${artist.email}`" target="_blank">{{ artist.email }}</a>
        </div>
    </section>
</template>