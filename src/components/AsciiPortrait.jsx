import { useAsciiReveal } from "../hooks/useAsciiReveal";

// Retrato en ASCII sobre una mancha orgánica oscura, con una sombra pastel desplazada.
function AsciiPortrait({ art, caption, years, textClass, shadowClass, blobClass }) {
  const shown = useAsciiReveal(art);

  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="relative">
        <div
          aria-hidden="true"
          className={`absolute inset-0 translate-x-3 translate-y-3 ${blobClass} ${shadowClass}`}
        />
        <div
          role="img"
          aria-label={`Retrato en ASCII de ${caption}`}
          className={`relative flex justify-center overflow-hidden bg-ink px-6 py-8 ${blobClass}`}
        >
          {/* El tamaño del ASCII es de ilustración, por eso queda fuera de la escala tipográfica */}
          <pre
            aria-hidden="true"
            className={`font-mono text-[9px] leading-[10px] sm:text-[10px] sm:leading-[11px] ${textClass}`}
          >
            {shown}
          </pre>
        </div>
      </div>
      <figcaption className="mt-5 flex items-baseline justify-between border-t-2 border-ink pt-2">
        <span className="font-display text-xl font-extrabold uppercase">{caption}</span>
        <span className="text-sm">{years}</span>
      </figcaption>
    </figure>
  );
}

export default AsciiPortrait;
