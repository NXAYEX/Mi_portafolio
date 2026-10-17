import { useEffect, useMemo, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

const GLYPHS = "01@#%&*+=<>/|{}[]";
const FRAME_MS = 45;

const randomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

// Muestra el dibujo como ruido de caracteres y lo "enfoca" de izquierda a derecha.
export function useAsciiReveal(text, duration = 1600) {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const lines = useMemo(() => text.split("\n"), [text]);

  // Momento (en ms) en que cada carácter deja de ser ruido
  const revealAt = useMemo(() => {
    const maxCol = Math.max(...lines.map((l) => l.length));
    return lines.map((line) =>
      [...line].map(
        (_, col) => (col / maxCol) * duration * 0.6 + Math.random() * duration * 0.4
      )
    );
  }, [lines, duration]);

  const [shown, setShown] = useState(text);

  useEffect(() => {
    if (reduced) return undefined;
    const render = (elapsed) =>
      lines
        .map((line, row) =>
          [...line]
            .map((ch, col) =>
              ch === " " || elapsed >= revealAt[row][col] ? ch : randomGlyph()
            )
            .join("")
        )
        .join("\n");

    const start = performance.now();
    let last = -FRAME_MS;
    let frame;
    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed - last >= FRAME_MS || elapsed >= duration) {
        last = elapsed;
        setShown(elapsed >= duration ? text : render(elapsed));
      }
      if (elapsed < duration) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [text, lines, revealAt, duration, reduced]);

  return shown;
}
