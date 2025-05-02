# Install dependencies only when needed
FROM node:23-slim AS base

ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Install dependencies
FROM base AS deps

COPY package.json package-lock.json ./
RUN npm ci

# Build the application
FROM base AS build

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy only necessary files
FROM node:23-slim AS runner

ENV NODE_ENV=production

WORKDIR /app

# Copy built assets and production deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/package.json ./package.json

EXPOSE 3004

CMD ["npm", "start", "--", "-p", "3004"]
