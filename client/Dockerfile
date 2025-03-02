FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock first for caching dependencies
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the project files
COPY . .

# Build the project with Vite
RUN yarn build

# Use a lightweight web server for serving static files
FROM nginx:alpine

# Copy built files to Nginx's HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports (80 for HTTP, 443 for HTTPS as in your docker-compose.yml)
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


