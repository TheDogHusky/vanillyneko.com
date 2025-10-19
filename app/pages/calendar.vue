<script setup lang="ts">
const calendarEmbed = {
  src: "https://calendar.google.com/calendar/embed?src=db22582ee0218c2eacf802552c501f47c66b9c121192acbc1521a7a68548d379%40group.calendar.google.com&ctz=America%2FNew_York",
  width: 2000,
  height: 1800
}
</script>

<template>
  <main class="center index relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <MainWallpaper class="absolute inset-0 opacity-50" />
    <div class="relative z-10 py-16">
      <h1 class="font-6xl font-bold text-center drop-shadow-lg">Vanilly's Calendar</h1>
      <ScrollButton to="#content" class="mt-4" />
    </div>
  </main>
  <section id="content" class="container min-h-screen bg-image bg-tertiary-wallpaper py-12">
    <h2 class="font-6xl font-bold text-center mb-8">Vanilly's Calendar</h2>
    <p class="font-2xl w-3/4 mx-auto text-center mb-8">
      Stay updated with Vanilly's schedule! Check out the calendar below for upcoming streams, events, and more.
    </p>
    <div class="w-3/4 mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <iframe
          :src="calendarEmbed.src"
          style="border: 0"
          :width="calendarEmbed.width"
          :height="calendarEmbed.height"
          frameborder="0"
          scrolling="no"
          class="w-full max-w-full h-[600px] md:h-[600px]"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.bg-image {
  background-size: cover;
  background-position: center;
}
.bg-tertiary-wallpaper {
  background-color: #f9fafb; /* Fallback color */
}
</style>