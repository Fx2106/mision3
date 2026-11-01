# Analizador de Clanes Clash of Clans
## Mision M3 Reactor CoreComo probarlo:
Abre la terminal en la carpeta del proyecto, ejecuta npm install para instalar las dependencias y luego npm run dev para arrancar el servidor. Veras el panel de control interactivo con los datos del clan Andaluces Unios.

## Uso de IA:
Toda esta practica la he hecho con la ayuda de la inteligencia artificial paso a paso. Le pedi que me dividiera el proyecto en componentes pequeños para no hacer un componente-dios y que me escribiera la logica. Mi trabajo ha sido ensamblar los archivos, probar en el navegador con el servidor local para asegurar que no habia errores y configurar los datos del mockData para que todo encajara con mi clan.

## Autopsia:
1. Valores derivados en lugar de estado duplicado. El top 3 de donadores y el total de miembros los calculo al vuelo durante el renderizado del componente DashboardClan. Descarte usar un useState nuevo para guardarlos porque habria duplicado datos inutilmente y la rubrica exige usar el estado minimo indispensable.
2. Abstraer la logica a un custom hook. He metido el useEffect y el AbortController en un archivo separado llamado useClashAPI. Descarte hacer el fetch simulado directamente en el App porque habria ensuciado el componente principal con logica asincrona, y de paso asi me aseguro los puntos del bonus.