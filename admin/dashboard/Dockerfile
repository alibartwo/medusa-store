# === Build stage ===
FROM node:18-bullseye AS builder

WORKDIR /app

# Enable Yarn 3
RUN corepack enable && corepack prepare yarn@3.2.1 --activate

# Copy deps and install without PnP
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --frozen-lockfile

# Copy rest of app
COPY . .

# Build preview version
RUN yarn build:preview

# === Run stage ===
FROM node:18-slim

WORKDIR /app

RUN corepack enable && corepack prepare yarn@3.2.1 --activate

# Copy only necessary files
COPY --from=builder /app ./

EXPOSE 5173

CMD ["yarn", "preview", "--port", "5173", "--host"]