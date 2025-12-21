export default defineNuxtPlugin(() => {
    const toast = useToast();
    const { data } = useAuth();

    watch(
        () => data.value,
        (data, prevData) => {
            if (data?.error && data.error !== prevData?.error) {
                toast.error({
                    title: 'Authentication Error',
                    message: 'Something weird happened while doing auth work. Check the console for details.'
                });

                console.error("Authentication Error", data?.error)
            }
        },
        { immediate: true }
    );
})
