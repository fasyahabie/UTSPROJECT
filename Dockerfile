# Menggunakan base image nginx
FROM nginx:alpine

# Install git untuk melakukan cloning
RUN apk add --no-cache git

# Hapus file bawaan nginx
RUN rm -rf /usr/share/nginx/html/*

# Lakukan git clone ke folder spesifik /tmp/repo
RUN git clone https://github.com/fasyahabie/UTSPROJECT.git /tmp/repo

# Pindahkan isi repo ke folder root Nginx
RUN cp -r /tmp/repo/. /usr/share/nginx/html/

# (Opsional) Hapus folder sementara agar ukuran image lebih kecil
RUN rm -rf /tmp/repo

# Expose port 80
EXPOSE 80