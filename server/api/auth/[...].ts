import { NuxtAuthHandler } from '#auth';
import KeycloakProvider from "next-auth/providers/keycloak";

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        // @ts-ignore - see https://github.com/sidebase/nuxt-auth/issues/760
        KeycloakProvider.default({
            clientId: useRuntimeConfig().keycloackClientId,
            clientSecret: useRuntimeConfig().keycloackClientSecret,
            issuer: useRuntimeConfig().keycloackIssuer
        })
    ]
});