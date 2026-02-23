<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const wallpaper = runtimeConfig.public.backgroundImage;

const toast = useToast();
const route = useRoute();
const router = useRouter();

watch(
    () => route.query,
    async (newQuery) => {
        const title = newQuery.toastTitle as string | undefined;
        const message = newQuery.toastMessage as string | undefined;
        const type = newQuery.toastType as 'success' | 'error' | 'info' | 'warning' | undefined;

        if (title && message && type) {
            toast[type]({
                title: decodeURIComponent(title),
                message: decodeURIComponent(message)
            });

            // Remove the toast query parameters from the URL
            const { toastTitle, toastMessage, toastType, ...rest } = newQuery;
            await router.replace({ query: rest });
        }
    },
    { immediate: true }
);

// DOWNTIME TOAST EXAMPLE
toast.error({
    title: "Scheduled Maintenance",
    position: "topCenter",
    class: "banner",
    timeout: false,
    icon: "iziToast-icon ico-warning",
    message: "Our services are currently offline at the moment due to a migration towards a datacenter. Please do not contact us about this."
});
</script>

<template>
    <div :style="{ '--background-image': 'url(\'' + wallpaper + '\');' }">
        <Header />
        <NuxtLoadingIndicator :height="2" color="#ef9999" />
        <NuxtPage />
        <Footer />
    </div>
</template>
