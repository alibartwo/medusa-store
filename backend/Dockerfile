FROM node:18-alpine

# Enable corepack for yarn
RUN corepack enable

# Install system dependencies
RUN apk add --no-cache \
    postgresql-client \
    tar \
    gzip \
    curl \
    git

# Create medusa user
RUN addgroup -g 1001 -S medusa && \
    adduser -S medusa -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY --chown=medusa:medusa package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source code (excluding unnecessary files)
COPY --chown=medusa:medusa . .
RUN rm -f db-data.tar.gz 2>/dev/null || true

# Change ownership to medusa user
RUN chown -R medusa:medusa /app

# Switch to medusa user
USER medusa

# Expose ports
EXPOSE 9000 7001

# Default command
CMD ["yarn", "dev"]