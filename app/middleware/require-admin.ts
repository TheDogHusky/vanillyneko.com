export default defineNuxtRouteMiddleware((to) => {
    const { data } = useAuth();

    if (!data.value?.user.roles.includes("admin")) {
        return abortNavigation("You do not have the required permissions to access this ressource.");
    }

    return;
});