// Archivo: src/components/Buscador.jsx

export default function Buscador({ tag, onTagChange }) {
  return (
    <div className="buscador">
      <label htmlFor="clanInput">Buscar Clan (Tag):</label>
      
      {/* Input controlado: su valor lo dicta React, no el navegador[cite: 92] */}
      <input
        id="clanInput"
        type="text"
        value={tag} 
        onChange={(e) => onTagChange(e.target.value)} // Comunicamos el cambio hacia el padre[cite: 87]
        placeholder="Ej: #R9QR9QC"
      />
    </div>
  );
}
