# Docker Deployment Guide

This project includes Docker support for easy deployment and development.

## Quick Start

### Production Deployment

1. **Build the Docker image:**
   ```bash
   docker build -t vanillyneko-app .
   ```

2. **Run the container:**
   ```bash
   docker run -d -p 3000:3000 --name vanillyneko-app vanillyneko-app
   ```

3. **Access the application:**
   Open your browser to `http://localhost:3000`

### Using Docker Compose

1. **Production:**
   ```bash
   docker-compose up -d
   ```

2. **Development:**
   ```bash
   docker-compose --profile dev up
   ```

## GitHub Container Registry

This project automatically builds and pushes Docker images to GitHub Container Registry when you push to the main branch.

### Pull the latest image:
```bash
docker pull ghcr.io/thedoghusky/vanillyneko.com:latest
```

### Run the pre-built image:
```bash
docker run -d -p 3000:3000 ghcr.io/thedoghusky/vanillyneko.com:latest
```

## Environment Variables

- `NUXT_HOST`: Host to bind to (default: 0.0.0.0)
- `NUXT_PORT`: Port to listen on (default: 3000)
- `NODE_ENV`: Environment mode (production/development)

## Docker Files

- `Dockerfile`: Multi-stage production build
- `Dockerfile.dev`: Development build with hot reload
- `docker-compose.yml`: Docker Compose configuration
- `.dockerignore`: Files to exclude from build context

## GitHub Actions

The `.github/workflows/docker-build.yml` workflow automatically:

1. Builds the Docker image on every push to main/master
2. Pushes the image to GitHub Container Registry
3. Tags images with branch names, commit SHA, and 'latest' for main branch
4. Handles pull request builds

### Setting up the workflow:

1. The workflow uses `GITHUB_TOKEN` which is automatically provided
2. Make sure your repository has "Actions" enabled
3. Push your changes to trigger the first build

## Local Development

For local development with Docker:

```bash
# Build development image
docker build -f Dockerfile.dev -t vanillyneko-dev .

# Run with volume mount for live reloading
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules vanillyneko-dev
```

## Deployment Tips

1. **Production**: Use the main `Dockerfile` for optimized, secure production builds
2. **Security**: The production image runs as a non-root user
3. **Size**: Multi-stage build reduces final image size
4. **Caching**: Layer ordering optimizes build cache efficiency
