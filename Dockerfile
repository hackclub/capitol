# Build the static site...
FROM node:18-alpine AS build

WORKDIR /app

# Enable Corepack and prepare the packageManager declared in package.json
RUN corepack enable

COPY package.json pnpm-lock.yaml ./

RUN corepack prepare --activate

# Install dependencies deterministically
RUN pnpm install --no-frozen-lockfile

COPY . .

ENV NODE_ENV=production
RUN pnpm run build

# ...then serve the files in out/ with nginx. No Node at runtime.
FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 3000
