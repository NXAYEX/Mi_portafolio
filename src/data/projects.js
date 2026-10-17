// Contenido de los proyectos. Cada objeto es una tarjeta del inicio y una ficha en /proyectos/:slug.
//
// Para agregar una captura real:
//   1. Guarda la imagen en src/assets/projects/ (por ejemplo bubox.png).
//   2. Impórtala arriba: import buboxImage from "../assets/projects/bubox.png";
//   3. En el proyecto, cambia `image: null` por `image: buboxImage` y escribe `imageAlt`.
// Mientras `image` sea null se muestra un marcador dibujado en ASCII.

export const projects = [
  {
    slug: "bubox",
    number: "01",
    name: "BuBox",
    year: "2026",
    status: "Proyecto en curso · Feria de Software USM",
    role: "Tech Lead backend y diseño del detector de parónimos",
    tools: ["Python", "FastAPI", "React Native", "Expo", "Scrum", "NLP"],
    plateClass: "bg-mint",
    hoverClass: "hover:bg-mint/40",
    image: null,
    imageAlt: "",
    motif: String.raw`
 .------.
/ BuBox /|
'------' |
| Aa   | |
| ---  | '
| ---  |/
'------'`.slice(1),
    problem: "Aplicación móvil de apoyo a la lectura para personas con dislexia.",
    contribution: [
      "Encargada de Tecnologías (Tech Lead) en un equipo de 6 personas.",
      "Diseñé la base del backend: endpoint de subida de documentos con validaciones, modelos de usuario y documento, y eliminación de archivos.",
      "Diseñé un algoritmo propio para detectar parónimos en español y una función que define palabras según el contexto.",
      "El resto del equipo se encargó del frontend, el diseño/UX, la IA y el marketing.",
    ],
    process:
      "Usamos Python y FastAPI en el backend, React Native con Expo en el frontend y trabajamos en sprints con Scrum. Comparé MongoDB, Firestore y PostgreSQL por costo, latencia e integración con FastAPI, y documenté la decisión. Como no existía un algoritmo para detectar parónimos en español, armé uno propio y lo documenté en un informe.",
    result:
      "Los usuarios que probaron la app dieron feedback que indica que las funcionalidades sí les ayudan. Aprendí a justificar decisiones técnicas por escrito y a elegir soluciones que se adapten a lo que queremos lograr como equipo.",
    improvement: "Optimizar la app para que sea más rápida con archivos grandes.",
    evidence: [{ label: "Ver el sitio de BuBox", url: "https://bubox.feriadesoftware.cl" }],
  },
  {
    slug: "ojo-on",
    number: "02",
    name: "OJO ON",
    year: "2025",
    status: "Prototipo académico · ramo de Aplicaciones Móviles",
    role: "Modelo OCR para leer etiquetas de precio y pantallas de cámara",
    tools: ["Flutter", "Dart", "Google Cloud OCR", "Replit", "Figma"],
    plateClass: "bg-lavender",
    hoverClass: "hover:bg-lavender/40",
    image: null,
    imageAlt: "",
    motif: String.raw`
  .-""""-.
 /  .--.  \
|  ( () )  |
 \  '--'  /
  '-.__.-'`.slice(1),
    problem:
      "Ayudar a personas ciegas en las compras del supermercado con una app parecida a un carrito de compras, adaptada para ellas.",
    contribution: [
      "Equipo de 4 personas.",
      "Me encargué del modelo OCR (elegí e implementé el de Google Cloud) y lo adapté para leer etiquetas de precios y filtrar solo lo necesario.",
      "Aporté en el diseño del logo y desarrollé las pantallas de tomar foto, imagen tomada e imagen descartada.",
      "El equipo hizo las demás pantallas y el diseño en Figma, siguiendo el kit de Material Design 3.",
    ],
    process:
      "Desarrollamos en Flutter, así que programamos en Dart. Para el OCR creé un proyecto en Google Cloud y lo integré como API; lo desplegué en Replit como api_vision para que mis compañeros pudieran probarlo. Figma nos guió el diseño de cada pantalla.",
    result:
      "Funcionaba bien con imágenes algo borrosas y, cuando la lectura no era confiable, la app se lo avisaba al usuario por voz. Cada botón y texto tenía audio, así que una persona vidente también podía saber qué tocaba y qué producto leía.",
    improvement:
      "Probar la app con personas ciegas y conocer su opinión. Con un solo semestre no alcanzamos a hacer pruebas con usuarios.",
    evidence: [
      { label: "Ver la presentación del ramo", url: "https://canva.link/u5ehjhiuarl1q78" },
    ],
  },
  {
    slug: "xai-retina",
    number: "03",
    name: "Proyecto XAI",
    year: "2025",
    title:
      "Explicabilidad de la clasificación de enfermedades oculares mediante Vision Transformers usando LIME",
    status: "Proyecto académico · curso de IA Explicable (paper y póster)",
    role: "Clasificación de retinografías y explicaciones visuales con LIME",
    tools: ["Vision Transformer", "LIME", "Hugging Face", "Python", "Google Colab"],
    plateClass: "bg-peach",
    hoverClass: "hover:bg-peach/40",
    image: null,
    imageAlt: "",
    motif: String.raw`
   .-""""-.
  / .-""-. \
 | (  []  ) |
  \ '-..-' /
   '-.__.-'`.slice(1),
    problem:
      "Los modelos de deep learning clasifican enfermedades oculares con buena precisión, pero funcionan como una “caja negra”. En salud, quien los usa necesita saber en qué parte de la imagen se basó el modelo para decidir. De ahí nace la inteligencia artificial explicable.",
    contribution: [
      "Busqué y descargué la base de datos.",
      "Me encargué de clasificar enfermedades oculares a partir de imágenes de retina con un modelo de visión profunda de Hugging Face, y le añadí LIME.",
      "Mis compañeros mejoraron esa base y le hicieron fine-tuning al Vision Transformer para subir las métricas de rendimiento.",
    ],
    process:
      "Usamos Vision Transformers para clasificar y LIME (Local Interpretable Model-Agnostic Explanations) para generar explicaciones visuales. Elegí LIME porque, al trabajar con retinografías, muestra las zonas de la imagen que más pesaron en la predicción. Al principio medí solo con accuracy.",
    result:
      "El modelo alcanzó precisión, recall y F1-score superiores al 93%, con especial solidez en las clases Diabetic Retinopathy y Cataract. LIME permitió ver las regiones más influyentes y reveló fortalezas y errores, como la confusión entre Normal y Glaucoma. Así la IA deja de ser una caja negra y se puede decidir con más confianza.",
    improvement: "Probar también SHAP, otra técnica de explicabilidad igual de interesante.",
    evidence: [
      {
        label: "Ver el póster",
        url: "https://drive.google.com/file/d/18Cy8aoZf8lj5C2Pnq8EblOHGv2Ouk7Og/view?usp=sharing",
      },
    ],
  },
];

export const getProject = (slug) => projects.find((project) => project.slug === slug);
