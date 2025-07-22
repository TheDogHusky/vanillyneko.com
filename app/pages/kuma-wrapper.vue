<template>
  <div style="height: 100vh; margin: 0; padding: 0; overflow: hidden;">
    <iframe
      id="kuma-frame"
      :src="kumaURL"
      style="width: 100%; height: 100%; border: none;"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '#imports'

const kumaURL = ref('https://up.vnil.me/status/all/')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const urlParam = params.get('kuma')
  if (urlParam) {
    kumaURL.value = urlParam
  }
})

// ✅ Load iframeResizer.contentWindow.min.js into <head>
useHead({
  script: [
    {
      src: 'https://stttc.b-cdn.net/iframeResizer/iframeResizer.contentWindow.min.js',
      tagPosition: 'head', // optional, just to be explicit
    }
  ]
})
</script>
