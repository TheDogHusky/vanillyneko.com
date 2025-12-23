import { NuxtAuthHandler } from '#auth';
import KeycloakProvider, { KeycloakProfile } from "next-auth/providers/keycloak";
import { jwtDecode } from "jwt-decode";

interface VanillyKeycloakProfile extends KeycloakProfile {
    roles?: string[];
}

const refreshAccessToken = async (token: any) => {
    try {
        if (!token.refreshToken) throw new Error("No refresh token available");

        const details: {
            [key: string]: string
        } = {
            client_id: process.env.NUXT_KEYCLOACK_CLIENT_ID!,
            client_secret: process.env.NUXT_KEYCLOACK_CLIENT_SECRET!,
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken
        }

        const formBody = Object.keys(details)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key] as string))
            .join('&');

        const url = `${process.env.NUXT_PUBLIC_KEYCLOACK_ISSUER}/protocol/openid-connect/token`;

        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formBody
        });

        const refreshedTokens = await response.json();
        if (!response.ok) throw refreshedTokens;
        const tokenData = jwtDecode(refreshedTokens.access_token) as any;

        return {
            ...token,
            accessToken: refreshedTokens.access_token,
            accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
            roles: tokenData.resource_access.vanillynekocom?.roles || [],
            user: {
                name: tokenData.name,
                email: tokenData.email
            }
        }
    } catch (error: any) {
        return {
            ...token,
            user: {
                roles: []
            },
            error: "RefreshAccessTokenError: " + error.error + ": " + error.error_description
        }
    }
}

export default NuxtAuthHandler({
    secret: useRuntimeConfig().authSecret,
    providers: [
        // @ts-ignore - see https://github.com/sidebase/nuxt-auth/issues/760
        KeycloakProvider.default<VanillyKeycloakProfile>({
            clientId: useRuntimeConfig().keycloackClientId,
            clientSecret: useRuntimeConfig().keycloackClientSecret,
            issuer: useRuntimeConfig().public.keycloackIssuer,
            profile(profile: any) {
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
        async jwt({ token, user, account }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    accessTokenExpires: account.expires_at
                        ? account.expires_at * 1000
                        : Date.now() + 300 * 1000,
                    // @ts-ignore
                    roles: user.roles || []
                }
            }

            if (Date.now() < (token.accessTokenExpires as number)) {
                return token;
            }

            return refreshAccessToken(token);
        },

        async session({ session, token }) {
            return {
                ...session,
                user: {
                    roles: token.roles || [],
                    ...session.user
                },
                error: token.error
            }
        }
    }
});