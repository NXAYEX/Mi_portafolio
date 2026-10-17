// Portada de un proyecto: la captura real si existe; si no, un marcador con un dibujo ASCII.
function ProjectCover({ project, className = "" }) {
  const { image, imageAlt, motif, plateClass, name } = project;

  if (image) {
    return (
      <img
        src={image}
        alt={imageAlt}
        className={`border-2 border-ink object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Marcador de la captura de ${name}, pendiente de subir`}
      className={`grid aspect-[4/3] place-items-center border-2 border-ink ${plateClass} ${className}`}
    >
      <pre aria-hidden="true" className="font-mono text-base leading-5 text-ink">
        {motif}
      </pre>
    </div>
  );
}

export default ProjectCover;
