# vanillyneko.com

VanillyNeko's Personal Website, made with Nuxt 3 (v4 compatible), dockerized.

## Docker usage

Please refer to the [DOCKER.md](DOCKER.md) file for detailed instructions on how to use Docker with this project.

## Getting Started

Make sure to install dependencies:

```bash
# yarn
yarn install
```

Create a `.env` file in the root directory of the project. You can use the provided `.env.example` as a template.

```bash
cp .env.example .env
nano .env
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# yarn
yarn build
```

Locally preview production build:

```bash
# yarn
yarn preview
```

Run the production server:

Make sure to set the `NODE_ENV` environment variable to `production` before running the server. Also, add a NITRO_PORT environment variable if you want to change the default port (3000).

```bash
# Use node.js 22 or higher
node .output/server/index.mjs
```