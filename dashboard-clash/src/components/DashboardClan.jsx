// Archivo: src/components/DashboardClan.jsx

import TarjetaMiembro from "./TarjetaMiembro";

export default function DashboardClan({ clanData }) {
  // Si aún no hay datos, no renderizamos el panel
  if (!clanData) return null;

  // VALORES DERIVADOS: No usamos useState para esto, lo calculamos al vuelo[cite: 80, 88, 147]
  const totalMiembros = clanData.memberList.length;
  
  // Ordenamos de mayor a menor donación y nos quedamos con los 3 primeros
  const topDonadores = clanData.memberList
    .toSorted((a, b) => b.donations - a.donations)
    .slice(0, 3); 

  return (
    <section className="dashboard">
      <header className="cabecera-clan">
        <h2>{clanData.name} <span>(Nivel {clanData.clanLevel})</span></h2>
        {/* Aquí mostramos las normas reales de tu clan */}
        <p className="descripcion-clan">{clanData.description}</p>
        <p className="resumen-stats">Total de Puntos: {clanData.clanPoints} | Miembros: {totalMiembros}/50</p>
      </header>

      <div className="top-donadores">
        <h3>🔥 Top 3 Donadores</h3>
        <ul>
          {/* Iteración de listas con su prop key estable obligatoria[cite: 72, 147] */}
          {topDonadores.map((jugador) => (
             <li key={jugador.tag}>
               <strong>{jugador.name}</strong>: {jugador.donations} tropas donadas
             </li>
          ))}
        </ul>
      </div>

      <h3>Lista de Miembros</h3>
      <div className="grid-miembros">
        {/* Renderizamos un componente por cada miembro de la lista[cite: 69] */}
        {clanData.memberList.map((miembro) => (
          <TarjetaMiembro key={miembro.tag} miembro={miembro} />
        ))}
      </div>
    </section>
  );
}