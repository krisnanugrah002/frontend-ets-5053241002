# AI-LOG

Catat setiap penggunaan AI yang menghasilkan kode. Jika tidak memakai AI sama sekali, tulis satu baris: **tidak memakai AI**.

Log yang jujur tidak mengurangi nilai, sebanyak apa pun AI dipakai. Yang mengurangi nilai adalah log yang tidak sesuai dengan kode, atau isi log yang tidak bisa kamu jelaskan.

## Error White Blank Page
- Prompt: Kenapa hanya menampilkan gambar putih dan tidak ada request API sama sekali. Apakah ada yang salah dengan kode app.tsx, peminjamas.ts, dan resources.ts
- Dipakai:Fungsi komponen utama di file `src/App.tsx`.
- Diubah: Menambahkan sintaks `export default` di depan `function App()` sesuai dengan perbaikan dari AI.

## Struktur Direktori, File API, dan App.tsx
- Prompt: Dari file md yang saya lampirkan, bantu aku untuk membuat struktur direktori project. File apa yang harus dibuat. Kemudian bantu aku untuk membuat file API berdasarkan md yang aku lampirkan juga.
- Dipakai:Fungsi HTTP request di dalam folder `src/api/` dan kerangka state penggabung di `src/App.tsx`. Kemudian struktur direktori untuk checkpoint 1.
- Diubah: Menambahkan file `peminjaman.ts`, `resources.ts`, `ResourceForm.tsx`, `ResourceList.tsx` serta memperbarui kode di file `App.tsx`

## Fitur F2 Buat Peminjaman dan Form Terkendali
- Prompt: "Oke sekarang buatkan untuk F2"
- Dipakai: Komponen `BorrowingForm` di file `src/components/BorrowingForm.tsx` dan pembaruan *state* induk di `src/App.tsx`.
- Diubah: Saya memakai logika AI untuk melakukan *fetch* data sumber daya ke dalam elemen `<select>` dan mengonversi input pengguna secara eksplisit menggunakan `Number()`. Saya memastikan pengosongan *state* form dieksekusi tepat setelah respons 201 diterima agar mematuhi kontrak.

## Kesalahan render properti objek di Daftar Peminjaman (F3)
- Prompt: "apakah ada yang salah? kok keluarnya -- saja" beserta lampiran kode `BorrowingList`.
- Dipakai: Bagian rendering JSX (`return`) di dalam komponen `BorrowingList.tsx`.
- Diubah: Saya mengganti properti yang dipanggil di dalam elemen `<li>` sesuai perbaikan AI. Sebelumnya memanggil field masih milik resources (`res.peminjam`, dll) dan menyesuaikan format teks statisnya menjadi seperti `Slot 3-4` dan `Jumlah 1` agar persis sesuai dengan aturan pengujian di Requirement.