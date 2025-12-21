<script setup lang="ts">
import { requireRole } from "~/utils/functions";

definePageMeta({
    auth: true,
    middleware: ['sidebase-auth', requireRole("calendar")]
});

const calendarEmbed = ref({
    src: "https://calendar.google.com/calendar/embed?src=db22582ee0218c2eacf802552c501f47c66b9c121192acbc1521a7a68548d379%40group.calendar.google.com&ctz=America%2FNew_York",
    height: "600px",
    width: "800px",
});

function onResize() {
    if (window.innerWidth < 600) {
        calendarEmbed.value.width = "340px";
        calendarEmbed.value.height = "300px";
    } else if (window.innerWidth < 900) {
        calendarEmbed.value.width = "600px";
        calendarEmbed.value.height = "450px";
    } else if (window.innerWidth < 1200) {
        calendarEmbed.value.width = "800px";
        calendarEmbed.value.height = "600px";
    } else {
        calendarEmbed.value.width = "1200px";
        calendarEmbed.value.height = "800px";
    }

    console.log(`Adjusted calendar embed to ${calendarEmbed.value.width} x ${calendarEmbed.value.height}`);
}

onMounted(() => {
    window.addEventListener("resize", onResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
});
</script>

<template>
    <main class="center index container gap-2xl">
        <MainWallpaper class="absolute inset-0 opacity-50"/>
        <h1 class="font-6xl">Vanilly's Calendar</h1>
        <ScrollButton to="#content" />
    </main>
    <section id="content" class="container min-h-screen bg-image bg-tertiary-wallpaper gap-xl">
        <h2 class="font-6xl">Vanilly's Calendar</h2>
        <p class="font-2xl">
            Stay updated with Vanilly's schedule! Check out the calendar below for upcoming streams, events, and more.
        </p>
        <div
            class="overflow-hidden bg-white calendar-embed">
            <iframe
                :src="calendarEmbed.src"
                :height="calendarEmbed.height"
                :width="calendarEmbed.width"
                frameborder="0"
                scrolling="no"
                class="w-full max-w-full"
            ></iframe>
        </div>
    </section>
</template>