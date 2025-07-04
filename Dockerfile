# Development Dockerfile for MedusaJS
FROM node:18-alpine

# Enable corepack and yarn
RUN corepack enable

# Install required system dependencies
RUN apk add --no-cache \
    postgresql-client \
    tar \
    gzip \
    curl \
    git \
    && rm -rf /var/cache/apk/*

# Create app user for security
RUN addgroup -g 1001 -S medusa && \
    adduser -S medusa -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY --chown=medusa:medusa package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy and extract database backup
COPY --chown=medusa:medusa db-data.tar.gz /tmp/
RUN cd /tmp && \
    tar -xzf db-data.tar.gz && \
    mkdir -p /app/db-backup && \
    mv db-data/* /app/db-backup/ 2>/dev/null || true && \
    rm -rf /tmp/db-data.tar.gz /tmp/db-data && \
    chown -R medusa:medusa /app/db-backup

# Create directories
RUN mkdir -p /app/uploads && \
    chown -R medusa:medusa /app

# Switch to non-root user
USER medusa

# Expose ports
EXPOSE 9000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:9000/health || exit 1

# Default command (will be overridden by docker-compose)
CMD ["yarn", "dev"]