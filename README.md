# React CI/CD Application

## Deskripsi

Aplikasi ini adalah contoh aplikasi React yang telah dikonfigurasi dengan sistem CI/CD menggunakan GitHub Actions. Aplikasi ini dirancang untuk menunjukkan proses otomatisasi pengujian dan deployment menggunakan pipeline CI/CD dengan GitHub Actions dan Vercel.

### Fitur

- **Automated Testing**: Pengujian otomatis untuk memastikan aplikasi berjalan dengan benar.
- **Automated Deployment**: Deployment otomatis ke Vercel setiap kali ada perubahan di branch `main`.

## Prasyarat

Sebelum menjalankan aplikasi ini, pastikan Anda memiliki hal berikut:

- **Node.js** (versi 18 atau lebih baru)
- **npm** atau **yarn** (terpasang secara otomatis dengan Node.js)

## Panduan Instalasi dan Jalankan di Lokal

Ikuti langkah-langkah berikut untuk menjalankan aplikasi ini secara lokal:

1. **Clone Repository**

   Pertama, clone repository ke mesin lokal Anda:

   ```bash
   git clone https://github.com/Thoriq-ha/cicd-react
   ```

2. **Masuk ke Direktori Proyek**

   Pindah ke direktori proyek yang baru saja Anda clone:

   ```bash
   cd cicd-react
   ```

3. **Instal Dependencies**

   Instal dependencies proyek menggunakan npm atau yarn:

   ```bash
   npm install
   ```

   Atau jika Anda menggunakan yarn:

   ```bash
   yarn install
   ```

4. **Jalankan Aplikasi**

   Jalankan aplikasi dengan perintah berikut:

   ```bash
   npm start
   ```

   Atau jika Anda menggunakan yarn:

   ```bash
   yarn start
   ```

   Aplikasi akan tersedia di [http://localhost:3000](http://localhost:3000) di browser Anda.

5. **Jalankan Tes**

   Untuk menjalankan tes, gunakan perintah berikut:

   ```bash
   npm test
   ```

   Atau jika Anda menggunakan yarn:

   ```bash
   yarn test
   ```

6. **Build Aplikasi**

   Untuk membuat build produksi dari aplikasi, jalankan:

   ```bash
   npm run build
   ```

   Atau jika Anda menggunakan yarn:

   ```bash
   yarn build
   ```

   Build yang dihasilkan akan berada di direktori `build`.

## Konfigurasi CI/CD

Aplikasi ini menggunakan GitHub Actions untuk CI/CD. File konfigurasi GitHub Actions berada di `.github/workflows/ci.yml`. Workflow ini mencakup:

- **Build**: Membangun aplikasi dan menjalankan tes.
- **Deploy**: Mendeploy aplikasi ke Vercel secara otomatis menggunakan token Vercel yang disimpan sebagai secret di GitHub.

## Deployment

Aplikasi secara otomatis dideploy ke Vercel setiap kali ada perubahan di branch `main`. Pastikan token Vercel Anda telah disimpan sebagai secret di repository GitHub dengan nama `VERCEL_TOKEN`.

## Kontribusi

Jika Anda ingin berkontribusi pada proyek ini, silakan buat pull request dengan perubahan yang Anda buat.

## Lisensi

Proyek ini dilisensikan di bawah **MIT License** - lihat `LICENSE` untuk detail lebih lanjut.
