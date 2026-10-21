import { useState } from 'react';
import { createResource } from '../api/resources';

export default function ResourceForm({ onResourceAdded }: { onResourceAdded: () => void }) {
  const [nama, setNama] = useState('');
  const [jenis, setJenis] = useState('ruang');
  const [stok, setStok] = useState(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createResource({ nama: nama.trim(), jenis, stok });
    setNama('');
    setJenis('ruang');
    setStok(1);
    onResourceAdded(); // Memicu re-fetch di komponen induk tanpa refresh
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama sumber daya
        <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} required />
      </label>
      <label>Jenis
        <select value={jenis} onChange={(e) => setJenis(e.target.value)}>
          <option value="ruang">ruang</option>
          <option value="alat">alat</option>
        </select>
      </label>
      <label>Stok
        <input type="number" min="1" value={stok} onChange={(e) => setStok(Number(e.target.value))} />
      </label>
      <button type="submit">Simpan sumber daya</button>
    </form>
  );
}