# Install dependencies only when needed
FROM oven/bun:1-slim AS base

ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile --production

# Build the application
FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

# Production image, copy only necessary files
FROM oven/bun:1-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

# Install curl for health check
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copy built assets and production deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json

EXPOSE 3004

CMD ["bun", "start", "--", "-p", "3004"]
