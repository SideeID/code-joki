# Multi-stage build for Next.js with Bun
FROM oven/bun:1-slim AS base

WORKDIR /app

# Install system dependencies including curl for health checks
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Dependencies stage - install all dependencies including dev dependencies
FROM base AS deps

COPY package.json bun.lockb ./
# Install all dependencies for build
RUN bun install --frozen-lockfile

# Build stage
FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Disable Next.js telemetry during build
ENV NEXT_TELEMETRY_DISABLED=1

# Build the application
RUN bun run build

# Production stage
FROM base AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package files
COPY package.json bun.lockb ./

# Install production dependencies only
RUN bun install --frozen-lockfile --production

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3004

CMD ["bun", "start", "--", "-p", "3004"]