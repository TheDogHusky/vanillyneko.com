export default defineNuxtPlugin(() => {
    const toast = useToast();
    const { data, signOut, getProviders } = useAuth();

    watch(
        () => data.value,
        async (data, prevData) => {
            if (data?.error && data.error !== prevData?.error) {
                if (data.error.trim().split(":")[1]?.trim() === "invalid_grant") {
                    await signOut({
                        redirect: true,
                        callbackUrl: "/auth/login"
                    });
                }

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
