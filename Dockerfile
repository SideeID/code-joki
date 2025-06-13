# Multi-stage build for Next.js with Bun - Optimized
FROM oven/bun:1-slim AS base

WORKDIR /app

# Install system dependencies including curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Dependencies stage - cache dependencies separately
FROM base AS deps

# Copy package files first for better caching
COPY package.json bun.lockb ./

# Install dependencies with cache mount for faster rebuilds
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile

# Build stage
FROM base AS builder

# Copy cached dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY package.json bun.lockb ./

# Copy source code
COPY src ./src
COPY public ./public
COPY next.config.ts tsconfig.json tailwind.config.ts postcss.config.mjs components.json ./

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the application with optimizations
RUN --mount=type=cache,target=/app/.next/cache \
    bun run build

# Production stage
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN groupadd --gid 1001 nodejs && \
    useradd --uid 1001 --gid nodejs --shell /bin/bash --create-home nextjs

# Copy package files
COPY package.json bun.lockb ./

# Install production dependencies only with cache
RUN --mount=type=cache,target=/root/.bun/install/cache \
    bun install --frozen-lockfile --production && \
    rm -rf /root/.bun/install/cache

# Copy built application with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3004

CMD ["node", "server.js"]
