# Spec 001: Hilando Voces (Makipuray) – App de Gestión para Lideresas de SJL

## Problema y usuaria
En San Juan de Lurigancho (1 264 060 hab., INEI), las lideresas de colectivos juveniles (mujeres de 18 a 29 años) reciben quejas vecinales dispersas sin una herramienta estructurada para validar que provengan de vecinos reales del distrito, ni para priorizar soluciones en su comunidad.

- **Usuaria principal de la App:** Lideresas comunitarias jóvenes (18 a 29 años) de San Juan de Lurigancho (colectivos registrados en RENOJ/SENAJU como Jóvenes Líderes de Mariátegui SJL, Junta Juvenil en defensa de Monteverde, COALE).
- **Usuarios del formulario de reporte:** Vecinos residentes de San Juan de Lurigancho mayores de 18 años (identificados con DNI, nombre completo, edad y sector de SJL).

## Propuesta de valor
"Una comunidad informada, una comunidad más fuerte": Una aplicación web centrada en las lideresas de SJL que les permite ingresar previa verificación de su DNI y residencia en el distrito, visualizar en un dashboard los reportes validados de sus vecinos en 3 ejes prioritarios, ubicar necesidades y a otras lideresas en el mapa de SJL, y gestionar sus proyectos comunitarios.

## Los 3 Ejes Problemáticos Fijos
1. **Alumbrado y transitabilidad:** Vías peatonales oscuras o deterioradas.
2. **Erradicación de microbasurales:** Acumulación de residuos en esquinas, colegios y accesos comunales.
3. **Recuperación de espacios recreativos:** Parques, losas y áreas comunes en abandono.

## Requisitos Funcionales (Formato EARS)
- **RF-1 (Verificación de Lideresa SJL):** CUANDO una lideresa ingresa su nombre completo, DNI (8 dígitos), edad (18 a 29 años) y zona/colectivo de SJL, EL SISTEMA verifica que pertenezca al padrón de SJL y sea mayor de 18 años antes de darle acceso a la aplicación.
- **RF-2 (Panel Principal de Lideresa):** CUANDO la lideresa verificada accede a la app, EL SISTEMA muestra el saludo "¡Hola, Lideresa!" y los 4 botones principales: Resumen, Mapa, Proyectos y Configuración (más el acceso al formulario vecinal verificado).
- **RF-3 (Resumen General / Dashboard de los 3 Ejes):** CUANDO la lideresa pulsa "Resumen", EL SISTEMA muestra un gráfico circular con la proporción de reportes en los 3 ejes fijos (Alumbrado y transitabilidad, Microbasurales, Espacios recreativos) y el contador total de reportes vecinales (ej. 120 reportes).
- **RF-4 (Mapa de Necesidades y Red de Lideresas SJL):** CUANDO la lideresa pulsa "Mapa", EL SISTEMA muestra el mapa de San Juan de Lurigancho con pines de las necesidades reportadas, la ubicación de otras lideresas del distrito y resalta la zona con más reportes.
- **RF-5 (Gestión de Proyectos Comunitarios):** CUANDO la lideresa pulsa "Proyectos", EL SISTEMA muestra la lista de proyectos de las lideresas (ej. "Parques seguros", "Talleres digitales", "Faena de limpieza") indicando qué proyectos están "En proceso", en "Propuesta" o "Realizados", permitiendo registrar nuevos avances.
- **RF-6 (Registro de Reporte Vecinal con DNI de SJL):** CUANDO un vecino registra una necesidad en el formulario conectado, EL SISTEMA exige su DNI (8 dígitos), nombre completo, edad (>= 18 años) y zona de SJL para confirmar su residencia antes de sumar el reporte al dashboard de las lideresas.

## Fuera de alcance
- Reportes anónimos o de menores de 18 años.
- Uso fuera del distrito de San Juan de Lurigancho.