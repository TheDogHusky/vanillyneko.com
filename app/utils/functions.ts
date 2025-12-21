import type { Session } from "next-auth";
import type { Roles } from "~/types/roles";
import type { RouteLocationNormalizedGeneric } from "vue-router";

const index = ref(0);

export const backgroundClasses = [
    "bg-secondary",
    "bg-primary",
    "bg-sea-200"
];

export const getBackgroundClass = (customIndex?: number): string => {
    return customIndex ? backgroundClasses[customIndex % backgroundClasses.length] as string : backgroundClasses[index.value++ % backgroundClasses.length] as string;
};

/**
 * Middleware to require a specific role
 * @param role The required role
 */
export const requireRole = (role: string) => (to: RouteLocationNormalizedGeneric, from: RouteLocationNormalizedGeneric) => {
    const { data } = useAuth();
    console.log(data.value?.user)

    if (!data.value?.user.roles.includes(role) && !data.value?.user.roles.includes("admin")) {
        if (!from || !from.name) {
            return navigateTo("/" + toastInURL("error", "Oops, access denied!", "You do not have access to this resource."), { replace: true });
        }

        useToast().error({
            title: "Oops, access denied!",
            message: "You do not have access to this resource."
        });

        return abortNavigation();
    }

    return;
};

type UnwrappedSession = Readonly<Session>;
export const hasOneOfRoles = (data: UnwrappedSession | null | undefined, roles: Roles[]): boolean => {
    if (!data) return false;

    for (const role of roles) {
        if (data.user.roles.includes(role) || data.user.roles.includes("admin")) {
            return true;
        }
    }

    return false;
};

export const hasAllRoles = (data: UnwrappedSession | null | undefined, roles: Roles[]): boolean => {
    if (!data) return false;

    for (const role of roles) {
        if (!data.user.roles.includes(role) && !data.user.roles.includes("admin")) {
            return false;
        }
    }

    return true;
}

export const hasRole = (data: UnwrappedSession | null | undefined, role: Roles): boolean => {
    if (!data) return false;

    return data.user.roles.includes(role) || data.user.roles.includes("admin");
};

/**
 * Allows to add a toast in the URL as query parameters.
 * This function is used in cases where the page changes, or any other case where useToast().type() does not work.
 * @param type
 * @param title
 * @param message
 * @param and
 */
export const toastInURL = (type: string, title: string, message: string, and = false)=> {
    return (and ? "&" : "?") + `toastTitle=${encodeURIComponent(title)}&toastMessage=${encodeURIComponent(message)}&toastType=${encodeURIComponent(type)}`;
};