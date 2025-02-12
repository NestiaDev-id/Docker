# Menggunakan image Node.js sebagai base image
FROM node:18-alpine

# Menetapkan working directory di dalam container
WORKDIR /app

# Menyalin file package.json dan package-lock.json
COPY package*.json ./

# Menginstal dependencies
RUN npm install

# Menyalin semua file ke dalam container
COPY . .

# Build aplikasi React
RUN npm run dev

# Menggunakan Nginx untuk serve frontend
# FROM nginx:alpine
# COPY --from=0 /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
