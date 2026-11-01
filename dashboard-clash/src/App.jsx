import { useState } from "react";
import Buscador from "./components/Buscador";
import DashboardRecetas from "./components/DashboardRecetas";
import { useMealAPI } from "./hooks/useMealAPI";

export default function App() {
  const [termino, setTermino] = useState("chicken"); 
  
  // Consumo de API real extrayendo la lógica al custom hook (Bonus)[cite: 147]
  const { data, isPending, error } = useMealAPI(termino);

  return (
    <main className="app-container">
      <h1>Chef Analytics Dashboard</h1>
      
      <Buscador termino={termino} onTerminoChange={setTermino} />

      {isPending && <p className="mensaje cargando">Consultando base de datos mundial...</p>}
      
      {error && <p className="mensaje error">{error}</p>}
      
      {!isPending && !error && <DashboardRecetas recetas={data} />}
    </main>
  );
}