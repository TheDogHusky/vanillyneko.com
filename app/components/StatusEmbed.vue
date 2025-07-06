<script setup lang="ts">
useHead({
    script: [
        {
            src: "https://stttc.b-cdn.net/iframeResizer/iframeResizer.min.js"
        }
    ]
});
</script>

<template>
    <div class="status-embeds">
        <div class="status-embed">
            <iframe class="htframe" src="https://wl.hetrixtools.com/r/a98f2722f4c6da5d0ec3d4f11bfcad06/" width="100%" scrolling="no" style="border:none;" sandbox="allow-scripts allow-same-origin allow-popups" onload="iFrameResize([{log:false}],'.htframe')"></iframe>
        </div>
        <div class="status-embed">
            <iframe class="htframe" src="https://wl.hetrixtools.com/r/695e4b29f1304f3cedb081ef0cb686ba/" width="100%" scrolling="no" style="border:none;" sandbox="allow-scripts allow-same-origin allow-popups" onload="iFrameResize([{log:false}],'.htframe')"></iframe>
        </div>
        <div class="status-embed">
            <iframe class="htframe" src="https://wl.hetrixtools.com/r/a5f8401602b66cca155352d862dc7826/" width="100%" scrolling="no" style="border:none;" sandbox="allow-scripts allow-same-origin allow-popups" onload="iFrameResize([{log:false}],'.htframe')"></iframe>
        </div>
    </div>
</template>