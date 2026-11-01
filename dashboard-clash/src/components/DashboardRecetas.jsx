import TarjetaReceta from "./TarjetaReceta";

export default function DashboardRecetas({ recetas }) {
  if (!recetas || recetas.length === 0) return null;

  // VALOR DERIVADO: Transformamos datos con reduce para sacar estadísticas (sin duplicar estado)[cite: 1, 80, 147]
  const conteoOrigenes = recetas.reduce((acc, receta) => {
    acc[receta.strArea] = (acc[receta.strArea] || 0) + 1;
    return acc;
  }, {});

  const topOrigenes = Object.entries(conteoOrigenes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  return (
    <section className="dashboard">
      <header className="cabecera-clan">
        <h2>Análisis de Resultados</h2>
        <p className="resumen-stats">Total encontradas: {recetas.length} recetas</p>
      </header>

      <div className="top-donadores">
        <h3>🌍 Top 3 Orígenes Gastronómicos</h3>
        <ul>
          {/* Key estable al iterar[cite: 72, 147] */}
          {topOrigenes.map(([origen, cantidad]) => (
             <li key={origen}>
               <strong>{origen}</strong>: {cantidad} recetas
             </li>
          ))}
        </ul>
      </div>

      <div className="grid-miembros">
        {recetas.map((receta) => (
          <TarjetaReceta key={receta.idMeal} receta={receta} />
        ))}
      </div>
    </section>
  );
}