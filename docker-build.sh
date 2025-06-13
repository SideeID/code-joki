#!/bin/bash

# Docker build script with optimizations
# Usage: ./docker-build.sh [tag]

TAG=${1:-code-joki:latest}

echo "🚀 Building Docker image: $TAG"
echo "📦 Using BuildKit for better performance..."

# Enable Docker BuildKit for better performance
export DOCKER_BUILDKIT=1

# Build with cache and progress output
docker build \
  --progress=plain \
  --build-arg BUILDKIT_INLINE_CACHE=1 \
  --cache-from=$TAG \
  -t $TAG \
  .

echo "✅ Build completed: $TAG"
echo "📋 Image size:"
docker images | grep "$(echo $TAG | cut -d: -f1)"

echo ""
echo "🔧 To run the container:"
echo "docker run -p 3004:3004 $TAG"
