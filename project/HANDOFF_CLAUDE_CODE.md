# Handoff — Portal Web Alcaldía de Guarenas

## Qué es esto
Prototipo de alta fidelidad del **portal ciudadano de la Alcaldía de Guarenas** (Municipio Ambrosio Plaza, Edo. Miranda, Venezuela). Los archivos `*.dc.html` son **referencias de diseño hechas en HTML** (estilos en línea, sin build), no código de producción. La tarea para el desarrollador es **recrear estos diseños en el entorno del codebase destino** (React/Next, Vue, etc.) usando sus patrones y librerías. Si no hay codebase aún, elegir el framework y montarlos ahí.

Fidelidad: **hi-fi** — colores, tipografía, espaciado e interacciones son finales; recrear pixel-perfect.

## Cómo abrir los prototipos
Cada `*.dc.html` abre directo en el navegador. Cargan un runtime local `support.js` (Design Components) + React desde CDN. Son solo para referencia visual/comportamiento; no portar `support.js` al codebase real.

## Design tokens

### Colores
- Azul de marca (primario): `#4220E5`  · variante profunda `#0D0FAC` · header logo `#0D0FAC`
- Violeta (degradados/acento): `#7A5CFF` · `#5227FF`
- Navy (fondos oscuros, footer, hero video): `#141238` · `#0D0B2E`
- Naranja (acento/CTA secundario): `#FF9D00` · `#FFD08A`
- Aseo Urbano (línea de servicio): verde oscuro `#11302D` · verde `#7AB52E` · lima `#C6ED4E` · crema `#F6FAEF`
- Gráfica Aseo: rojo `#EA3755` · verde `#6CBF3F` · teal `#17B0C4`
- Turismo (categorías mapa): Patrimonio `#4220E5` · Plazas `#7A5CFF` · Parques `#1F9D55` · Museos `#E08A1E` · Naturales `#17A5C4`
- Neutros: texto `#161624`/`#1C1C1F` · secundario `#55555C`/`#6B6B77` · líneas `#ECECF1`/`#E6E6EA` · fondos `#FFFFFF`/`#F7F7FB`/`#F4F4F6`

### Tipografía
- Títulos/UI: **Poppins** (400/500/600/700). Display 700, headings 600, tight `letter-spacing:-.02em`.
- Cuerpo: **Varela Round** (párrafos, subtítulos, captions).
- Eyebrows: Poppins 700, 11.5px, `letter-spacing:.18em`, `text-transform:uppercase`.
- Escala aprox: display 40-54px · h2 34-38px · h3 22-27px · body 14-16px · caption 12.5-13.5px.

### Radios / sombras / motion
- Radios: chips 999px · tarjetas 14-22px · botones 10-11px · íconos 12-14px.
- Sombras: cálidas, p.ej. `0 18px 46px -30px rgba(20,18,56,.4)` (card), `0 24px 56px -34px rgba(20,18,56,.55)` (hover).
- Motion: reveal al hacer scroll (fade + subida 38px) vía CSS `animation-timeline: view()`. Carrusel de trámites `@keyframes marquee` (translateX -50%, pausa en hover). Contador de días con easing cúbico. Easing general `cubic-bezier(.22,.61,.36,1)`.

## Páginas / vistas
Entrypoint: **Inicio.dc.html**. Header sticky (logo `#0D0FAC` + nav + buscador + botón Trámites) y utility bar superior en todas.

1. **Inicio.dc.html** — Home. Secciones en orden:
   - Utility bar + Header sticky.
   - Hero: espacio reservado para **video institucional** (ícono play, fondo navy).
   - **Silueta de Guarenas** (línea, azul-gris) como divisor.
   - Acceso rápido: 5 tarjetas con foto (image-slot) + ícono superpuesto (Trámites, Noticias, Gestión, Identidad, Info Municipal) + 1 tarjeta grande "¿Cómo trabaja tu Alcaldía?".
   - **Contador Días de gestión** (banner full-bleed azul, número grande 150px, foto del alcalde centrada, "TRABAJO CONTINUO POR LA CIUDAD", hashtags, franja tricolor).
   - Gestión "Lo que construimos juntos": 2 tarjetas (Políticas sociales/económicas) con etiqueta, ejes de acción y CTA.
   - **Trámites** (full-bleed): banner con foto + degradado azul + buscador integrado; debajo **carrusel infinito** de 8 trámites (tarjetas futuristas, ícono en degradado, se deslizan y pausan en hover).
   - **Aseo Urbano** (banner full-bleed verde crema): descripción + camión 360° arrastrable + CTA.
   - Noticias: grid de tarjetas (país/ciudad/alcalde) con image-slots.
   - Logros e hitos: fotos reales + contador animado.
   - Identidad: grid 4 fotos (Fiestas, Eventos, Patrimonio, Turismo) con etiqueta y hover.
   - **Banner Turismo "Vive Guarenas"** (full-bleed): foto aérea de Guarenas + logo Vive Guarenas centrado + chips (Patrimonio/Cultura/Naturaleza/Gastronomía).
   - **Vive Guarenas mapa**: leyenda categorizada (16 puntos) + mapa Leaflet/OpenStreetMap con marcadores numerados; click en leyenda → flyTo.
   - Info Municipal: "Guarenas en cifras" (4 stats con íconos degradado + barras animadas) + "Agenda Amarilla" (mini-directorio azul con tarjetas Industrial/Comercial/Turismo).
   - Enlaces institucionales: 4 tarjetas (Alcaldía, Ayuntamiento, Gobernación, Ministerios).
   - Footer navy con silueta decorativa, secciones, contacto y "Mi querida Guarenas".

2. **Aseo Urbano.dc.html** — hero crema-verde, camión 360°, estadísticas + **gráfica de líneas animada** (toneladas rojo/verde/teal), **mapa Leaflet** con rutas Diurna/Nocturna por día y camiones por ruta (datos en `rutas-aseo.js`).

3. **Gestion.dc.html**, **Tramites.dc.html**, **Noticias.dc.html**, **Identidad.dc.html**, **Info Municipal.dc.html** — páginas de cada segmento, mismo header/footer.

## Interacciones clave
- Reveal on scroll (todas las secciones, clase `.rv`).
- Carrusel de trámites (marquee CSS, pausa en hover).
- Camión 360°: arrastrar horizontal cambia frame (8 frames PNG por CDN).
- Mapas Leaflet (OpenStreetMap): zoom/arrastre; marcadores numerados; leyenda → `flyTo`.
- Gráfica de toneladas: dibujo animado (stroke-dashoffset) al entrar en viewport; puntos interactivos.
- Contador de días: cuenta hacia arriba al cargar/entrar en viewport.
- image-slot: placeholders donde el usuario arrastra sus fotos (Home hero video, acceso rápido, noticias, identidad, banner turismo).

## Assets (carpeta `assets/`)
- Logos: `logo-alcaldia.png` (header), `logo-blue.svg`/`logo-white.svg`, `isotipo-*`, `logo-vive-white.svg`/`logo-vive-blue.svg` (Vive Guarenas).
- Silueta: `silueta-guarenas.png` (línea azul-gris).
- Fotos: `alcalde.png`, `turismo-guarenas-vivid.png` (aérea), `obra-*.jpg` (logros), `fiestas-patronales.png`, `eventos-culturales.png`, `patrimonio.png`, camión 360° (8 frames, URLs CDN dentro del JS), `tramites-banner` (CDN).
- Datos: `rutas-aseo.js` (rutas de aseo). Puntos turísticos: array `TURISMO` dentro de `Inicio.dc.html` (16 puntos con lat/lng aprox y categoría).

## Librerías externas
- Google Fonts: Poppins + Varela Round.
- Leaflet 1.9.4 (mapas) + OpenStreetMap tiles.
- React (solo por el runtime de prototipo; en producción usa el framework del codebase).

## Notas
- Coordenadas de los puntos turísticos son **aproximadas** (prototipo) — verificar/ajustar con datos oficiales.
- Los datos numéricos (población, año 1621, toneladas, etc.) provienen del documento de definición y del folleto "Vive Guarenas"; confirmar antes de publicar.
- El logo nunca va en negro: solo azul o blanco.
