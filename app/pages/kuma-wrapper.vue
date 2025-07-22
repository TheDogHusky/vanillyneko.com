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
import { onMounted, ref } from 'vue'

const kumaURL = ref('https://up.vnil.me/status/all/')

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const urlParam = params.get('kuma')
  if (urlParam) {
    kumaURL.value = urlParam
  }
})
</script>

<!-- Load iframe resizer content script -->
<!-- This makes this wrapper responsive to outer iFrame resizing -->
<!-- This runs INSIDE the wrapper -->
<script src="https://stttc.b-cdn.net/iframeResizer/iframeResizer.contentWindow.min.js"></script>
