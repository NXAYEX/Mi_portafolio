# Diseño

- Paleta: papel #F2F3EF, tinta #16161D, menta #B8E6CF, lavanda #CFC6F2, durazno #FFCDB8, línea #C9CBC4.
- Fuentes: Big Shoulders Display (títulos) e Instrument Sans (cuerpo). El ASCII usa monoespaciada.
- Elemento firma: retratos ASCII de Ada Lovelace y Alan Turing que se "enfocan" al cargar (`useAsciiReveal`). Es el único movimiento de la página y se desactiva con prefers-reduced-motion.
- Alien: aparece solo en la ficha XAI (la "caja negra") y en la página 404.
- Rutas: `/` (inicio con secciones) y `/proyectos/:slug` (fichas).

## Dónde cambiar el contenido
| Qué | Archivo |
|---|---|
| Nombre, frases, correo, LinkedIn, GitHub, ruta del CV | `src/data/profile.js` |
| Dibujos ASCII | `src/data/asciiArt.js` |
| CV en PDF | reemplazar `public/cv/CV-Nayely-Perez.pdf` |
| Colores y escala de letras | `tailwind.config.js` |
