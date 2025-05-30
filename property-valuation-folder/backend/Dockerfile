# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install dependencies (production only)
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Copy application code
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose port
EXPOSE 4000

# Start the application
CMD ["node", "server.js"]
