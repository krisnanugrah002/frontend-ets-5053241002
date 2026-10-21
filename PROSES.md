# PROSES

## 1. Persona dan masalahnya
(2-3 kalimat dengan kata-katamu sendiri: siapa pengguna persona kamu, masalah apa yang diselesaikan fitur khasnya di layar.)

## 2. Rancangan komponen dan state
(Gambar atau tulis pembagian komponen: komponen apa saja, state apa disimpan di komponen mana, dan props apa yang mengalir ke bawah. Rancang ini sebelum menulis kode, lalu catat kalau berubah di tengah jalan.)

## 3. Satu keputusan desain
(Satu keputusan yang kamu ambil, pilihan lain yang kamu pertimbangkan, dan alasanmu memilih yang ini. Contoh: kenapa daftar peminjaman diambil ulang dari server setelah setiap aksi, bukan hanya diubah di state.)

## 4. Bug atau kendala (minimal dua)
### Bug 1
- Gejala: Halaman web blank, form sumber daya tidak muncul, dan tidak ada aktivitas  API di tab Network.
- Cara menemukan: : Setelah menjalankan npm run dev dan membuka http://localhost:5173, halaman tidak menampilkan UI apapun dan log tab Network Fetch/XHR tetap kosong meski sudah di-refresh.
- Penyebab dan solusi: Penyebabnya adalah fungsi komponen utama di App.tsx tidak diekspor, sehingga file main.tsx gagal membaca dan merender komponen tersebut. Solusinya adalah menambahkan sintaks export default di depan function App().

### Bug 2
- Gejala:
- Cara menemukan:
- Penyebab dan solusi:

## 5. Change request
(Apa yang diminta, bagian kode mana yang kamu ubah, dan satu keputusan desain yang kamu ambil.)
