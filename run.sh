#!/bin/bash
# Build the image and run the site on http://localhost:3000. The site is
# static; it needs no environment variables or secrets.

set -e

docker rm -f cac-test 2>/dev/null || true

echo "🏗️  Building Docker image..."
docker build -t cac-finalist .

echo "🚀 Starting container..."
docker run -d -p 3000:3000 --name cac-test cac-finalist

echo "✅ Running at http://localhost:3000  (logs: docker logs cac-test, stop: docker stop cac-test)"
