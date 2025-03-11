# Build Stage
FROM node:alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the project
RUN yarn build

# Nginx Stage
FROM nginx:alpine

# Copy SSL certificates
COPY ssl /etc/nginx/ssl/

# Copy Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built files from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports
EXPOSE 80 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
