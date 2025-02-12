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

# Menentukan port yang akan digunakan
EXPOSE 5000

# Menjalankan aplikasi
CMD ["npm", "start"]
