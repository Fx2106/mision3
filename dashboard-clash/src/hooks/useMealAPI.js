import { useState, useEffect } from "react";

export function useMealAPI(query) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }

    const controlador = new AbortController();
    
    async function fetchData() {
      setIsPending(true);
      setError(null);
      
      try {
        // Petición a la API pública real con señal de aborto[cite: 112]
        const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, {
          signal: controlador.signal
        });
        
        // Manejo de errores HTTP (try/catch, response.ok)[cite: 1, 51]
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const json = await respuesta.json();
        
        if (!json.meals) {
          throw new Error("No se encontraron recetas con ese nombre.");
        }
        
        setData(json.meals);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        if (!controlador.signal.aborted) {
          setIsPending(false);
        }
      }
    }

    fetchData();

    // Limpieza: cancela la petición si cambias de búsqueda rápido[cite: 79, 147]
    return () => controlador.abort();
  }, [query]);

  return { data, isPending, error };
}