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
  
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    getResources().then(data => setResources(data));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(''); 

    // Validasi Frontend manual untuk memunculkan role="alert"[cite: 2, 5]
    if (!sumberDayaId) {
      setErrorMsg('Sumber daya belum dipilih.');
      return;
    }
    if (peminjam.trim() === '') {
      setErrorMsg('Peminjam tidak boleh kosong.');
      return;
    }
    if (!tanggal) {
      setErrorMsg('Tanggal wajib diisi.');
      return;
    }
    if (Number(slotMulai) > Number(slotSelesai)) {
      setErrorMsg('Slot mulai tidak boleh lebih besar dari slot selesai.');
      return;
    }

    const selectedRes = resources.find(r => r.id === Number(sumberDayaId));
    if (selectedRes && (Number(jumlah) < 1 || Number(jumlah) > selectedRes.stok)) {
      setErrorMsg(`Jumlah harus antara 1 dan stok (${selectedRes.stok}).`);
      return;
    }

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
    } catch (error: any) {
      setErrorMsg(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Tampilan pesan error wajib sesuai kontrak F4 */}
      {errorMsg && (
        <div role="alert" style={{ color: 'red', border: '1px solid red', padding: '10px', marginBottom: '10px' }}>
          {errorMsg}
        </div>
      )}

      {/* Semua atribut "required" dihapus agar tidak dicegat oleh browser */}
      <label>Sumber daya
        <select value={sumberDayaId} onChange={(e) => setSumberDayaId(e.target.value)}>
          <option value="" disabled>-- Pilih Sumber Daya --</option>
          {resources.map(res => (
            <option key={res.id} value={res.id}>{res.nama}</option>
          ))}
        </select>
      </label>
      
      <label>Peminjam
        <input type="text" value={peminjam} onChange={(e) => setPeminjam(e.target.value)} />
      </label>
      
      <label>Tanggal
        <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
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
        <input type="number" min="1" value={jumlah} onChange={(e) => setJumlah(Number(e.target.value))} />
      </label>
      
      <button type="submit">Simpan peminjaman</button>
    </form>
  );
}