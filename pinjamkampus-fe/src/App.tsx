import { useState } from 'react';
import ResourceForm from './components/ResourceForm';
import ResourceList from './components/ResourceList';

export default function App() {
  const [refreshResources, setRefreshResources] = useState(0);
  const triggerResourceRefresh = () => setRefreshResources(prev => prev + 1);

  return (
    <div>
      <h1>PinjamKampus ETS</h1>
      <section>
        <h2>Kelola Sumber Daya</h2>
        <ResourceForm onResourceAdded={triggerResourceRefresh} />
        <ResourceList refreshTrigger={refreshResources} />
      </section>
    </div>
  );
}