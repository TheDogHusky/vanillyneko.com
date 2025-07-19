<script setup lang="ts">
import { onMounted } from 'vue';
useHead({
  script: [
    {
      src: "https://stttc.b-cdn.net/iframeResizer/iframeResizer.min.js"
    }
  ]
});

onMounted(() => {
  // Initialize iframeResizer for all iframes
  const frames = document.querySelectorAll(".htframe, .kuma-frame");
  frames.forEach((frame) => {
    iFrameResize({ 
      log: false, 
      checkOrigin: false, 
      sizeWidth: true, // Allow width to adjust dynamically
      heightCalculationMethod: 'bodyScroll', // Use content's scroll height
      widthCalculationMethod: 'bodyScroll' // Use content's scroll width
    }, frame);
  });
});
</script>

<template>
  <div class="status-embeds">
    <!-- HetrixTools embeds -->
    <div class="status-embed" v-for="src in hetrixUrls" :key="src">
      <iframe
        class="htframe"
        :src="src"
        width="100%"
        scrolling="no"
        style="border: none;"
        sandbox="allow-scripts allow-same-origin allow-popups"
      ></iframe>
    </div>

    <!-- Uptime Kuma embed -->
    <div class="status-embed">
      <iframe
        class="kuma-frame"
        src="https://up.vnil.me/status/all/"
        width="100%"
        scrolling="no"
        style="border: none;"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
const hetrixUrls = [
  "https://wl.hetrixtools.com/r/a98f2722f4c6da5d0ec3d4f11bfcad06/",
  "https://wl.hetrixtools.com/r/695e4b29f1304f3cedb081ef0cb686ba/",
  "https://wl.hetrixtools.com/r/a5f8401602b66cca155352d862dc7826/"
];
</script>

<style scoped>
.status-embeds {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 2rem;
}

.status-embed iframe {
  width: 100%;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden; /* Prevent scrollbars */
}

/* Optional blur background effect */
body {
  background: url("https://vnil.me/mCN54LT7drpc.png") center/cover no-repeat fixed;
  backdrop-filter: blur(8px);
}
</style>
