export default defineNuxtRouteMiddleware(() => {
    const { data } = useAuth();

    if (!data.value?.user.roles.includes("admin")) {
        useToast().error({
            title: "Oops, access denied!",
            message: "You do not have access to this ressource."
        });
        return abortNavigation();
    }

    return;
});