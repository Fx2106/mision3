// Archivo: src/components/TarjetaMiembro.jsx

export default function TarjetaMiembro({ miembro }) {
  // Calculamos si el jugador "chupa" del clan (recibe mucho más de lo que dona)
  const esSanguijuela = miembro.donations < miembro.received / 2;

  return (
    // Interpolamos clases condicionales con template literals[cite: 66, 147]
    <article className={`tarjeta-miembro ${esSanguijuela ? 'alerta' : ''}`}>
      <h3>{miembro.name}</h3>
      
      {/* Renderizado condicional limpio: solo se pinta si la condición es true[cite: 71, 147] */}
      {miembro.role === 'leader' && <span className="etiqueta lider">Líder</span>}
      {miembro.role === 'coLeader' && <span className="etiqueta colider">Colíder</span>}
      
      <div className="stats">
        <p>Trofeos: {miembro.trophies}</p>
        <p>Donadas: {miembro.donations}</p>
        <p>Recibidas: {miembro.received}</p>
      </div>
      
      {esSanguijuela && <p className="error-texto">¡Atención: Ratio de donaciones bajo!</p>}
    </article>
  );
}