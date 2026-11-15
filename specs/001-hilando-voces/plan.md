# Plan Técnico: Hilando Voces - App Lideresas SJL (001)

## Decisiones de Stack
| Decisión | Elegimos | Por qué |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3 y JavaScript Vanilla (sin dependencias) | Diseño mobile-first idéntico al prototipo visual de Makipuray, rápido de editar y desplegable gratis en GitHub Pages. |
| **Datos y Estado** | Objetos JS + `localStorage` (`js/data.js`) | Almacena el padrón de lideresas de SJL, los reportes de vecinos verificados con DNI y la lista de proyectos comunitarios. |
| **Gráficos y Mapa** | CSS + SVG interactivo en el DOM | Dibuja el gráfico circular de los 3 ejes y el mapa de SJL con pines de necesidades y lideresas sin librerías externas. |
| **Pruebas** | Tests en `tests/` | Comprueba validación de DNI/mayoría de edad (+18) en SJL, cálculo de los 3 ejes y gestión de proyectos. |

## Estructura de Archivos del Frontend
- `index.html`: Contiene la pantalla de Verificación de Lideresa (DNI + Nombre + SJL), las 4 vistas de la app para lideresas (1. Panel principal, 2. Resumen general, 3. Mapa y ubicación, 4. Mis proyectos) y la vista del Formulario Vecinal (DNI +18 SJL).
- `css/styles.css`: Estilos mobile-first en tonos lila/morado pastel basados en el prototipo de Makipuray.
- `js/data.js`: Datos iniciales de SJL (lideresas verificadas, 120 reportes clasificados en los 3 ejes fijos, coordenadas de zonas de SJL y proyectos de las lideresas).
- `js/app.js`: Lógica de login con DNI de SJL, renderizado del dashboard, filtros del mapa (necesidades vs. otras lideresas) y creación de proyectos.