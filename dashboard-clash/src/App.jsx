// Archivo: src/App.jsx

import { useState } from "react";
import Buscador from "./components/Buscador";
import DashboardClan from "./components/DashboardClan";
import { useClashAPI } from "./hooks/useClashAPI";

export default function App() {
  // Única fuente de verdad para el buscador (estado levantado)[cite: 73, 86, 147]
  const [tag, setTag] = useState("#R9QR9QC"); 
  
  // Consumimos nuestro custom hook (puntos BONUS)[cite: 84, 147]
  const { data, isPending, error } = useClashAPI(tag);

  return (
    <main className="app-container">
      <h1>Panel de Control del Clan</h1>
      
      {/* Pasamos el estado y la función actualizadora por props[cite: 87] */}
      <Buscador tag={tag} onTagChange={setTag} />

      {/* Manejo visual de los tres estados de carga (Renderizado condicional)[cite: 50, 116, 147] */}
      {isPending && <p className="mensaje cargando">Conectando con los servidores de Supercell...</p>}
      
      {error && <p className="mensaje error">{error}</p>}
      
      {/* Si no está cargando, no hay error y hay datos, pintamos el dashboard[cite: 71] */}
      {!isPending && !error && <DashboardClan clanData={data} />}
    </main>
  );
}