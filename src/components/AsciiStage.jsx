// Espacio donde se dibuja un ASCII directamente sobre la página, sin fondo ni marco.
// El contenedor define el ancho de referencia (cqw) con el que se calcula el tamaño de letra.
function AsciiStage({ label, aspectClass = "aspect-square", children }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative mx-auto w-full overflow-hidden [container-type:inline-size] ${aspectClass}`}
    >
      {children}
    </div>
  );
}

export default AsciiStage;
