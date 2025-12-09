<script setup lang="ts">
import "@iframe-resizer/child";
import IframeResizer from '@iframe-resizer/vue/sfc';
</script>

<template>
    <ClientOnly>
        <div class="status-embeds">
            <div class="status-embed">
                <IframeResizer
                    src="https://wl.hetrixtools.com/r/a98f2722f4c6da5d0ec3d4f11bfcad06/"
                    width="100%"
                    license="GPLv3"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                ></IframeResizer>
            </div>
            <div class="status-embed">
                <IframeResizer
                    src="https://wl.hetrixtools.com/r/695e4b29f1304f3cedb081ef0cb686ba/"
                    width="100%"
                    license="GPLv3"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                ></IframeResizer>
            </div>
            <div class="status-embed">
                <IframeResizer
                    src="https://wl.hetrixtools.com/r/a5f8401602b66cca155352d862dc7826/"
                    width="100%"
                    license="GPLv3"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                ></IframeResizer>
            </div>
          <!--Dead for now-->
          <!--<div class="status-embed uptime-kuma-embed">
              <IframeResizer
                  src="https://up.vnil.me/status/all/"
                  width="100%"
                  height="1800px"
                  license="GPLv3"
              ></IframeResizer>
          </div>-->
      </div>
  </ClientOnly>
</template>
