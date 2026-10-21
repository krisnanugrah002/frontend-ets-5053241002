import { useState } from 'react';
import ResourceForm from './components/ResourceForm';
import ResourceList from './components/ResourceList';
import BorrowingForm from './components/BorrowingForm';
import BorrowingList from './components/BorrowingList';

export default function App() {
  const [refreshResources, setRefreshResources] = useState(0);
  const [refreshBorrowings, setRefreshBorrowings] = useState(0);
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
        <h2>Buat Peminjaman</h2>
        {/* Render Form F2 di sini */}
        <BorrowingForm onBorrowingAdded={triggerBorrowingRefresh} />
        <BorrowingList refreshTrigger={refreshBorrowings} />
      </section>
    </div>
  );
}