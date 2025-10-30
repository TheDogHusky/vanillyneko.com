<script setup lang="ts">
const ZELLE_EMAIL = 'nilly@vanillyneko.com'
</script>

<template>
  <!-- Header Section (your existing dark header) -->
  <main class="container bg-dark min-h-10xl">
    <h1 class="font-6xl">Zelle Guide</h1>
  </main>

  <!-- Main Content Section (your wallpaper background) -->
  <section class="container min-h-screen py-16 px-6 bg-image bg-tertiary-wallpaper">

    <!-- Centered Card -->
    <div class="max-w-3xl mx-auto">

      <!-- Zelle Logo + Intro -->
      <div class="text-center mb-14">
        <img
            src="https://images.icon-icons.com/3915/PNG/128/zelle_logo_icon_249110.png"
            alt="Zelle Logo"
            class="w-28 h-28 mx-auto mb-6 drop-shadow-lg"
        >
        <h2 class="font-5xl text-white drop-shadow-md">Send Money Instantly</h2>
        <br>
        <h3 class="text-xl text-white/90 mt-3 font-medium">0% fees • No app needed • Bank-to-bank</h3>
      </div>

      <br>
      <!-- Step-by-Step Instructions -->
      <div class="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
        <h3 class="font-4xl text-center mb-10 text-gray-800 dark:text-white">
          How to Send in 3 Steps
        </h3>

        <br>
        <ol class="space-y-8 text-lg text-gray-700 dark:text-gray-200">
          <li class="flex gap-5 items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
            </div>
            <div class="flex-1">
              <strong class="block text-xl mb-1">Open your bank app</strong>
              <span class="text-gray-600 dark:text-gray-400">
                Navigate to <strong>Pay & Transfer → Zelle</strong>
              </span>
            </div>
          </li>

          <br>
          <li class="flex gap-5 items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
            </div>
            <div class="flex-1">
              <strong class="block text-xl mb-1">Tap “Send”</strong>
              <span class="text-gray-600 dark:text-gray-400">
                Enter: <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">{{ ZELLE_EMAIL }}</code>
              </span>
            </div>
          </li>

          <br>
          <li class="flex gap-5 items-start">
            <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-md">
            </div>
            <div class="flex-1">
              <strong class="block text-xl mb-1">Add amount + note</strong>
              <span class="text-gray-600 dark:text-gray-400">
                e.g. “Thanks Neko!” → Tap <strong>Send</strong>
              </span>
            </div>
          </li>
        </ol>

        <br>
        <!-- Security Warning -->
        <div class="mt-10 p-5 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-2xl text-sm text-red-700 dark:text-red-300">
          <strong class="block mb-1">Important:</strong> <br>
          Only send this if you are 100% sure! — Zelle payments are instant and irreversible!
        </div>

        <br>
        <!-- Back to Home Button -->
        <div class="text-center mt-10">
          <NuxtLink
              to="/"
              class="inline-block px-10 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-lg rounded-xl 
                   shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </NuxtLink>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Optional: Improve dark mode readability */
.dark .bg-white\/95 {
  background-color: rgba(31, 41, 55, 0.95) !important;
}
</style>