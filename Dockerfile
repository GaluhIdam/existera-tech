# Stage 1: Build React app
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve dengan nginx
FROM nginx:alpine

# Copy hasil build dari stage build
COPY --from=build /app/build /usr/share/nginx/html

# Copy konfigurasi nginx (pastikan path sesuai konteks build)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
