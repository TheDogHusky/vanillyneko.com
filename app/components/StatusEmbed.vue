<script setup lang="ts">
import { onMounted } from 'vue'

useHead({
  script: [
    {
      src: 'https://stttc.b-cdn.net/iframeResizer/iframeResizer.min.js',
      defer: true,
    },
  ],
})

onMounted(() => {
  // @ts-ignore
  if (window.iFrameResize) {
    window.iFrameResize({ log: false }, '.htframe')
  }
})
</script>

<template>
  <div class="status-embeds">
    <div class="status-embed">
      <iframe
        class="htframe"
        src="https://wl.hetrixtools.com/r/a98f2722f4c6da5d0ec3d4f11bfcad06/"
        width="100%"
        scrolling="no"
        style="border:none;"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>

    <div class="status-embed">
      <iframe
        class="htframe"
        src="https://wl.hetrixtools.com/r/695e4b29f1304f3cedb081ef0cb686ba/"
        width="100%"
        scrolling="no"
        style="border:none;"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>

    <div class="status-embed">
      <iframe
        class="htframe"
        src="https://wl.hetrixtools.com/r/a5f8401602b66cca155352d862dc7826/"
        width="100%"
        scrolling="no"
        style="border:none;"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>

    <div class="status-embed">
      <iframe
        class="htframe"
        src="https://up.vnil.me/status/all"  <!-- Your Uptime Kuma URL -->
        width="100%"
        scrolling="no"
        style="border:none;"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
.status-embeds {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.status-embed {
  flex: 1 1 400px;
  min-width: 320px;
  max-width: 100%;
  height: 600px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
</style>
