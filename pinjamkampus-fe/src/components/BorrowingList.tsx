import { useEffect, useState } from 'react';
import { getBorrowings } from '../api/peminjaman';


export default function BorrowingList({ refreshTrigger }: { refreshTrigger: number }) {
  const [borrowings, setBorrowings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getBorrowings().then(data => {
      if (active) {
        setBorrowings(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [refreshTrigger]);

  if (loading) return <p>Memuat...</p>; // Teks "Memuat..." wajib muncul

  return (
    <ul aria-label="Daftar peminjaman">
      {borrowings.map(res => (
        <li key={res.id}>
          {res.peminjam} - {res.tanggal} - {res.slot_mulai} s/d {res.slot_selesai} - {res.jumlah} - {res.status}
        </li>
      ))}
    </ul>
  );
}