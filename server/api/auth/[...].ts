import { NuxtAuthHandler } from '#auth';
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak";

interface VanillyKeycloakProfile extends KeycloakProfile {
    roles?: string[];
}

console.log(process.env)

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        // @ts-ignore - see https://github.com/sidebase/nuxt-auth/issues/760
        KeycloakProvider.default<VanillyKeycloakProfile>({
            clientId: useRuntimeConfig().keycloackClientId,
            clientSecret: useRuntimeConfig().keycloackClientSecret,
            issuer: useRuntimeConfig().public.keycloackIssuer,
            profile(profile: any) {
                console.log("Keycloak profile:", profile.resource_access.vanillynekocom?.roles);
                return {
                    id: profile.sub,
                    name: profile.name ?? profile.preferred_username,
                    email: profile.email,
                    image: profile.picture,
                    roles: profile.resource_access.vanillynekocom?.roles || []
                };
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // @ts-ignore
                token.roles = (user as VanillyKeycloakProfile).roles || [];
            }
            return token;
        },
        async session({ session, token }) {
            // Return the modified session
            return {
                ...session,
                user: {
                    roles: token.roles || [],
                    ...session.user
                }
            }
        }
    }
});