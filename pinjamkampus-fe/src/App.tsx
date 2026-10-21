import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ResourceForm from './components/ResourceForm'
import ResourceList from './components/ResourceList'

function App() {
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