export default function TarjetaReceta({ receta }) {
  const tieneTags = receta.strTags ? true : false;

  return (
    <article className="tarjeta">
      <img src={receta.strMealThumb} alt={receta.strMeal} />
      <h3>{receta.strMeal}</h3>
      
      <div className="etiquetas">
        <span className="etiqueta categoria">{receta.strCategory}</span>
        <span className="etiqueta origen">{receta.strArea}</span>
      </div>
      
      {/* Renderizado condicional limpio[cite: 71, 147] */}
      {tieneTags && <p className="tags-extra">🏷️ {receta.strTags.split(',').join(', ')}</p>}
      
      <a href={receta.strYoutube} target="_blank" rel="noreferrer" className="btn-video">Ver Video</a>
    </article>
  );
}