import { useState } from 'react';
import ResourceForm from './components/ResourceForm';
import ResourceList from './components/ResourceList';
import BorrowingForm from './components/BorrowingForm';
import BorrowingList from './components/BorrowingList';

export default function App() {
  const [refreshResources, setRefreshResources] = useState(0);
  const [refreshBorrowings, setRefreshBorrowings] = useState(0);
  
  // State untuk menyimpan data yang sedang di-edit (F6)
  const [editItem, setEditItem] = useState<any>(null);

  const triggerResourceRefresh = () => setRefreshResources(prev => prev + 1);
  const triggerBorrowingRefresh = () => setRefreshBorrowings(prev => prev + 1);

  return (
    <div>
      <h1>PinjamKampus ETS</h1>
      <section>
        <h2>Kelola Sumber Daya</h2>
        <ResourceForm onResourceAdded={triggerResourceRefresh} />
        <ResourceList refreshTrigger={refreshResources} />
      </section>

      <section>
        <h2>{editItem ? 'Edit Peminjaman' : 'Buat Peminjaman'}</h2>
        {/* Kirim editItem dan fungsi untuk membatalkan edit */}
        <BorrowingForm 
          onBorrowingAdded={triggerBorrowingRefresh} 
          editItem={editItem} 
          setEditItem={setEditItem} 
        />
      </section>

      <section>
        <h2>Daftar Peminjaman</h2>
        {/* Kirim fungsi onEdit untuk dipicu dari tombol Edit di daftar */}
        <BorrowingList 
          refreshTrigger={refreshBorrowings} 
          onEdit={(item) => setEditItem(item)}
          onRefresh={triggerBorrowingRefresh}
        />
      </section>
    </div>
  );
}