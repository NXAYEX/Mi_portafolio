# Diseño

- Paleta: papel #F2F3EF, tinta #16161D, menta #B8E6CF, lavanda #CFC6F2, durazno #FFCDB8, línea #C9CBC4.
- Fuentes: Big Shoulders Display (títulos) e Instrument Sans (cuerpo). El ASCII usa monoespaciada.
- Elemento firma: el retrato ASCII de Nayely, que se "enfoca" al cargar (`useAsciiReveal`), junto a una dona ASCII giratoria. Ambos se dibujan directo sobre la página, sin marco ni fondo, en el color del texto (negro en claro, blanco en oscuro). Todo movimiento se desactiva con prefers-reduced-motion. Los retratos de Ada Lovelace y Alan Turing quedan guardados en `asciiArt.js` y como comentario en `Hero.jsx`.
- Modo oscuro: botón en la barra; la clase `dark` vive en `<html>` y se guarda en localStorage. Las letras de los ASCII cambian de color con el tema.
- Alien: aparece solo en la ficha XAI (la "caja negra") y en la página 404.
- Rutas: `/` (inicio con secciones) y `/proyectos/:slug` (fichas).

## Dónde cambiar el contenido
| Qué | Archivo |
|---|---|
| Nombre, frases, correo, LinkedIn, GitHub, ruta del CV | `src/data/profile.js` |
| Dibujos ASCII | `src/data/asciiArt.js` |
| CV en PDF | reemplazar `public/cv/CV-Nayely-Perez.pdf` |
| Colores y escala de letras | `tailwind.config.js` |
