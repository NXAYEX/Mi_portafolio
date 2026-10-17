import { useMemo } from "react";
import AsciiOval from "./AsciiOval";
import { useAsciiReveal } from "../hooks/useAsciiReveal";

const CELL_WIDTH = 0.6; // ancho de una letra monoespaciada, en veces su altura

// Retrato en ASCII dentro de un óvalo.
// `scale` agranda el dibujo para que cubra el óvalo (lo que sobra se recorta).
// `square` estira el dibujo a lo alto para que recupere sus proporciones originales (sin dejar huecos entre líneas).
function AsciiPortrait({
  art,
  label,
  caption,
  detail,
  scale = 1.2,
  square = false,
  textClass = "text-snow dark:text-mint",
  shadowClass,
}) {
  const shown = useAsciiReveal(art);
  const { fontSize, stretch } = useMemo(() => {
    const lines = art.split("\n");
    const cols = Math.max(...lines.map((line) => line.length));
    return {
      fontSize: `${(scale * 100) / (cols * CELL_WIDTH)}cqw`,
      stretch: square ? (cols * CELL_WIDTH) / lines.length : 1,
    };
  }, [art, scale, square]);

  return (
    <figure className="mx-auto w-full">
      <AsciiOval label={label} shadowClass={shadowClass}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <pre
            aria-hidden="true"
            className={`font-mono ${textClass}`}
            style={{ fontSize, lineHeight: 1, transform: `scaleY(${stretch})` }}
          >
            {shown}
          </pre>
        </div>
      </AsciiOval>
      {caption && (
        <figcaption className="mt-8 flex items-baseline justify-between border-t-2 border-ink pt-2">
          <span className="font-display text-xl font-extrabold uppercase">{caption}</span>
          <span className="text-sm">{detail}</span>
        </figcaption>
      )}
    </figure>
  );
}

export default AsciiPortrait;
