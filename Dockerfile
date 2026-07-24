# Build stage
FROM node:26-alpine AS builder

WORKDIR /app

RUN npm install -g corepack
RUN corepack enable && corepack prepare yarn@stable --activate

COPY package.json yarn.lock .yarnrc.yml ./

RUN YARN_ENABLE_SCRIPTS=0 yarn workspaces focus || (cat /tmp/*/build.log && exit 1)

COPY . .

RUN yarn build

# Production stage
FROM node:26-alpine AS production

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nuxt -u 1001

COPY --from=builder --chown=nuxt:nodejs /app/.output ./.output
COPY --from=builder --chown=nuxt:nodejs /app/node_modules ./node_modules

USER nuxt

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production

CMD ["node", "--env-file=.env", ".output/server/index.mjs"]