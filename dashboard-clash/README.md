# Chef Analytics Dashboard
Misión M3 Reactor Core

## Cómo probarlo
Abre la terminal en la carpeta del proyecto, ejecuta `npm install` y luego `npm run dev`. La aplicación se conectará en vivo a la API pública de TheMealDB.

## Uso de IA
He utilizado IA para asegurar el cumplimiento estricto de las rúbricas de React. Le pedí que estructurara un panel analítico en lugar de una lista básica usando la API de TheMealDB. El código lo integré por fases, comprobando en el navegador que el `useEffect` gestionaba correctamente las peticiones a la API pública real y que los estilos CSS funcionaban. 

## Autopsia
1. Transformación de datos y valores derivados: En lugar de crear un estado (`useState`) para guardar el recuento de países de origen, utilizo `.reduce()` y `.sort()` para calcular el Top 3 de orígenes directamente en el renderizado de `DashboardRecetas`. Descarté usar un estado separado porque la rúbrica exige estado mínimo y habría duplicado datos innecesariamente.
2. Abstracción a un Custom Hook: Extraje el `fetch` y el `AbortController` al archivo `useMealAPI.js`. Descarté hacer la petición de red en `App.jsx` porque habría generado un componente-dios inflado de lógica asíncrona.