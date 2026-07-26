import { defineNuxtPlugin } from '#app';
// @ts-ignore
import IFrameResize from '@iframe-resizer/vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(IFrameResize);
})