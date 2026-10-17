// Marco ovalado para los dibujos ASCII.
// Modo claro: óvalo oscuro con una sombra pastel desplazada.
// Modo oscuro: el óvalo desaparece y el dibujo se funde con el fondo mediante una máscara radial.
function AsciiOval({ label, aspectClass = "aspect-[5/6]", shadowClass = "bg-lavender", children }) {
  return (
    <div role="img" aria-label={label} className="relative mx-auto w-full">
      <div
        aria-hidden="true"
        className={`absolute inset-0 translate-x-3 translate-y-3 rounded-[50%] dark:hidden ${shadowClass}`}
      />
      <div
        className={`relative overflow-hidden rounded-[50%] bg-night [container-type:inline-size] dark:rounded-none dark:bg-transparent dark:[mask-image:radial-gradient(ellipse_closest-side,#000_62%,transparent_100%)] ${aspectClass}`}
      >
        {children}
      </div>
    </div>
  );
}

export default AsciiOval;
