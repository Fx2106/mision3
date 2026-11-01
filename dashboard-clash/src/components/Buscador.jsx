export default function Buscador({ termino, onTerminoChange }) {
  return (
    <div className="buscador">
      <label htmlFor="inputBusqueda">Buscar ingrediente (ej. chicken, beef, salad):</label>
      <input
        id="inputBusqueda"
        type="text"
        value={termino}
        onChange={(e) => onTerminoChange(e.target.value)}
        placeholder="Escribe en inglés..."
      />
    </div>
  );
}