# 📰 Dashboard de Noticias Personalizadas

Una aplicación web de consumo de noticias en tiempo real, diseñada con un enfoque prioritario en la experiencia de usuario (UX/UI), el rendimiento y la persistencia de datos. Este proyecto integra un diseño moderno en "Dark Mode" maquetado previamente en Figma, trasladado a código mediante React.

🌐 **Despliegue en vivo:** [https://noticias-app-marco.vercel.app/](https://noticias-app-marco.vercel.app/)

## 🚀 Características Principales

*   **Consumo de API REST:** Integración con NewsAPI para obtener titulares actualizados al instante.
*   **Enrutamiento Dinámico:** Navegación fluida sin recargas de página utilizando `react-router-dom`, separando el feed principal de las vistas de categorías.
*   **Filtro por Categorías:** Clasificación de noticias (General, Deportes, Tecnología, Negocios y Entretenimiento) a través de peticiones parametrizadas.
*   **Buscador Integrado:** Filtrado de artículos mediante palabras clave capturadas desde la barra de búsqueda.
*   **Persistencia de Datos (LocalStorage):** Sistema de "Favoritos" que permite al usuario guardar y eliminar noticias, manteniendo la información intacta incluso tras recargar el navegador.
*   **Diseño Responsive y Dark Mode:** Interfaz moderna y adaptable a dispositivos móviles, basada en un diseño UI/UX propio creado en Figma.

## 🛠️ Stack Tecnológico

*   **Core:** React, Vite (Entorno de desarrollo rápido).
*   **Routing:** React Router v6.
*   **Peticiones HTTP:** Axios.
*   **Estilos:** CSS3 nativo (CSS Modules / Flexbox & CSS Grid para la estructura de tarjetas).
*   **Control de Versiones y Despliegue:** Git, GitHub y Vercel.

## ⚠️ Nota Técnica sobre el Despliegue (Importante)

La aplicación está desplegada y accesible en Vercel. Sin embargo, este proyecto utiliza el plan "Developer" (gratuito) de NewsAPI. Por políticas estrictas de seguridad (CORS) de la propia plataforma, **NewsAPI bloquea las peticiones realizadas desde dominios públicos en producción**.

Para evaluar correctamente toda la lógica de peticiones, el filtrado y el guardado de favoritos con datos reales, es necesario levantar el proyecto en un entorno local.

## 💻 Instalación y Uso en Local

Si deseas probar la aplicación sin las restricciones de la API en producción, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/maarcoslunna/noticias-app.git](https://github.com/maarcoslunna/noticias-app.git)