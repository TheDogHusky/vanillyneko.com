import { getServerSession } from '#auth';
import { links } from "~~/server/data/links";
import { Session } from "next-auth";

export default defineEventHandler(async (event) => {
    const session: Session | null = await getServerSession(event);
    if (!session) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
    }

    const link = links.find(l => l.code === event.context.params?.code);
    if (!link) {
        throw createError({ statusCode: 404, statusMessage: 'Link not found' });
    }

    const userRoles = session.user?.roles || [];
    const hasAccess = link.requiredRoles.every(role => userRoles.includes(role));
    if (!hasAccess) {
        throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
    }

    return {
        code: event.context.params?.code as string,
        redirect: link.url
    }
});
