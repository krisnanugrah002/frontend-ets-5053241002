# AI-LOG

Catat setiap penggunaan AI yang menghasilkan kode. Jika tidak memakai AI sama sekali, tulis satu baris: **tidak memakai AI**.

Log yang jujur tidak mengurangi nilai, sebanyak apa pun AI dipakai. Yang mengurangi nilai adalah log yang tidak sesuai dengan kode, atau isi log yang tidak bisa kamu jelaskan.

## (Nama fitur atau komponen, misalnya: Penanganan error 409 di form peminjaman, F5)
- Prompt: (ringkas, apa yang kamu minta)
- Dipakai: (bagian kode yang kamu ambil, misalnya nama komponen/fungsi dan file)
- Diubah: (apa yang kamu ubah atau perbaiki dari hasil AI, dan kenapa)

## Error White Blank Page
- Prompt: Kenapa hanya menampilkan gambar putih dan tidak ada request API sama sekali. Apakah ada yang salah dengan kode app.tsx, peminjamas.ts, dan resources.ts
- Dipakai:Fungsi komponen utama di file `src/App.tsx`.
- Diubah: Menambahkan sintaks `export default` di depan `function App()` sesuai dengan perbaikan dari AI.

## Struktur Direktori, File API, dan App.tsx
- Prompt: Dari file md yang saya lampirkan, bantu aku untuk membuat struktur direktori project. File apa yang harus dibuat. Kemudian bantu aku untuk membuat file API berdasarkan md yang aku lampirkan juga.
- Dipakai:Fungsi HTTP request di dalam folder `src/api/` dan kerangka state penggabung di `src/App.tsx`. Kemudian struktur direktori untuk checkpoint 1.
- Diubah: Menambahkan file `peminjaman.ts`, `resources.ts`, `ResourceForm.tsx`, `ResourceList.tsx` serta memperbarui kode di file `App.tsx`