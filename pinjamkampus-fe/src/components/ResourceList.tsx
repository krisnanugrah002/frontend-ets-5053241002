import { useEffect, useState } from 'react';
import { getResources } from '../api/resources';

export default function ResourceList({ refreshTrigger }: { refreshTrigger: number }) {
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getResources().then(data => {
      if (active) {
        setResources(data);
        setLoading(false);
      }
    });
    return () => { active = false; };
  }, [refreshTrigger]);

  if (loading) return <p>Memuat...</p>; // Teks "Memuat..." wajib muncul

  return (
    <ul aria-label="Daftar sumber daya">
      {resources.map(res => (
        <li key={res.id}>
          {res.nama} - {res.jenis} - {res.stok}
        </li>
      ))}
    </ul>
  );
}