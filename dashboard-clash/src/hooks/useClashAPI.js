// Archivo: src/hooks/useClashAPI.js

import { useState, useEffect } from "react";
import { mockClanData } from "../data/mockData";

export function useClashAPI(clanTag) {
  // Estado mínimo para gestionar la respuesta de la red[cite: 116, 147]
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si el tag está vacío, no hacemos nada
    if (!clanTag) return;

    // Instanciamos AbortController para la función de limpieza[cite: 112, 147]
    const controlador = new AbortController();
    
    async function fetchClan() {
      setIsPending(true);
      setError(null);
      
      try {
        // Simulamos el tiempo de espera de una API real (800ms) usando promesas[cite: 50]
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Si la petición fue cancelada, detenemos la ejecución[cite: 112]
        if (controlador.signal.aborted) return;

        // Simulamos un error si el tag es demasiado corto
        if (clanTag.length < 4) {
          throw new Error("El tag del clan no es válido.");
        }

        // Si todo va bien, cargamos los datos de "Andaluces Unios"
        setData(mockClanData);
      } catch (err) {
        // Ignoramos el error si fue provocado por nuestra propia cancelación[cite: 112]
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setIsPending(false);
        }
      }
    }

    fetchClan();

    // Cleanup: cancela la petición si el componente se desmonta o cambia el tag[cite: 79, 147]
    return () => controlador.abort();
  }, [clanTag]); // El efecto se vuelve a ejecutar solo si cambia el tag[cite: 79, 147]

  return { data, isPending, error };
}