import { useState, useEffect } from 'react';
import { getResources } from '../api/resources';
import { createBorrowing } from '../api/peminjaman';

export default function BorrowingForm({ onBorrowingAdded }: { onBorrowingAdded: () => void }) {
  const [resources, setResources] = useState<any[]>([]);
  const [sumberDayaId, setSumberDayaId] = useState('');
  const [peminjam, setPeminjam] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [slotMulai, setSlotMulai] = useState(1);
  const [slotSelesai, setSlotSelesai] = useState(1);
  const [jumlah, setJumlah] = useState(1);

  useEffect(() => {
    getResources().then(data => setResources(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      sumber_daya_id: Number(sumberDayaId),
      peminjam: peminjam.trim(),
      tanggal: tanggal,
      slot_mulai: Number(slotMulai),
      slot_selesai: Number(slotSelesai),
      jumlah: Number(jumlah)
    };

    try {
      await createBorrowing(payload);
      
      setSumberDayaId('');
      setPeminjam('');
      setTanggal('');
      setSlotMulai(1);
      setSlotSelesai(1);
      setJumlah(1);
      
      onBorrowingAdded(); 
    } catch (error) {
      console.error("Gagal menyimpan peminjaman", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Sumber daya
        <select value={sumberDayaId} onChange={(e) => setSumberDayaId(e.target.value)} required>
          <option value="" disabled>-- Pilih Sumber Daya --</option>
          {resources.map(res => (
            <option key={res.id} value={res.id}>{res.nama}</option>
          ))}
        </select>
      </label>
      
      <label>Peminjam
        <input type="text" value={peminjam} onChange={(e) => setPeminjam(e.target.value)} required />
      </label>
      
      <label>Tanggal
        <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required />
      </label>
      
      <label>Slot mulai
        <select value={slotMulai} onChange={(e) => setSlotMulai(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      
      <label>Slot selesai
        <select value={slotSelesai} onChange={(e) => setSlotSelesai(Number(e.target.value))}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </label>
      
      <label>Jumlah
        <input type="number" min="1" value={jumlah} onChange={(e) => setJumlah(Number(e.target.value))} required />
      </label>
      
      <button type="submit">Simpan peminjaman</button>
    </form>
  );
}