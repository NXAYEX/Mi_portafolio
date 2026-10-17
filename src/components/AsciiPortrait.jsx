import { useMemo } from "react";
import { useAsciiReveal } from "../hooks/useAsciiReveal";

// Retrato en ASCII sobre una lámina pastel con borde de tinta y sombra dura.
// El tamaño de letra se calcula con el ancho de la lámina (cqw), así el dibujo
// siempre ocupa todo el ancho sin importar el tamaño de pantalla.
function AsciiPortrait({ art, caption, years, plateClass, shadowClass }) {
  const shown = useAsciiReveal(art);
  const fontSize = useMemo(() => {
    const cols = Math.max(...art.split("\n").map((line) => line.length));
    return `${100 / (cols * 0.6)}cqw`;
  }, [art]);

  return (
    <figure className="mx-auto w-full max-w-[340px]">
      <div
        role="img"
        aria-label={`Retrato en ASCII de ${caption}`}
        className={`border-2 border-ink p-2 ${plateClass} ${shadowClass}`}
      >
        <div className="overflow-hidden [container-type:inline-size]">
          <pre
            aria-hidden="true"
            className="font-mono text-ink"
            style={{ fontSize, lineHeight: fontSize }}
          >
            {shown}
          </pre>
        </div>
      </div>
      <figcaption className="mt-6 flex items-baseline justify-between border-t-2 border-ink pt-2">
        <span className="font-display text-xl font-extrabold uppercase">{caption}</span>
        <span className="text-sm">{years}</span>
      </figcaption>
    </figure>
  );
}

export default AsciiPortrait;
