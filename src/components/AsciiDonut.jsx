import { useEffect, useMemo, useState } from "react";
import { prefersReducedMotion } from "../lib/motion";

const WIDTH = 40;
const HEIGHT = 22;
const SHADES = ".,-~:;=!*#$@";
const FRAME_MS = 50;

// Dona 3D en ASCII: se proyecta un toro girando y se elige el carácter según la luz.
// Es la versión clásica de Andy Sloane (donut.c).
function renderDonut(A, B) {
  const buffer = new Array(WIDTH * HEIGHT).fill(" ");
  const depth = new Array(WIDTH * HEIGHT).fill(0);
  const sinA = Math.sin(A);
  const cosA = Math.cos(A);
  const sinB = Math.sin(B);
  const cosB = Math.cos(B);

  for (let j = 0; j < 6.28; j += 0.07) {
    const cosJ = Math.cos(j);
    const sinJ = Math.sin(j);
    for (let i = 0; i < 6.28; i += 0.02) {
      const sinI = Math.sin(i);
      const cosI = Math.cos(i);
      const h = cosJ + 2;
      const D = 1 / (sinI * h * sinA + sinJ * cosA + 5);
      const t = sinI * h * cosA - sinJ * sinA;
      const x = Math.floor(WIDTH / 2 + 30 * D * (cosI * h * cosB - t * sinB));
      const y = Math.floor(12 + 15 * D * (cosI * h * sinB + t * cosB));
      const o = x + WIDTH * y;
      const N = Math.floor(
        8 * ((sinJ * sinA - sinI * cosJ * cosA) * cosB - sinI * cosJ * sinA - sinJ * cosA - cosI * cosJ * sinB)
      );
      if (y > 0 && y < HEIGHT && x > 0 && x < WIDTH && D > depth[o]) {
        depth[o] = D;
        buffer[o] = SHADES[N > 0 ? N : 0];
      }
    }
  }

  const rows = [];
  for (let r = 0; r < HEIGHT; r += 1) rows.push(buffer.slice(r * WIDTH, (r + 1) * WIDTH).join(""));
  return rows.join("\n");
}

function AsciiDonut({ className = "" }) {
  const reduced = useMemo(() => prefersReducedMotion(), []);
  const [frame, setFrame] = useState(() => renderDonut(1, 0.6));
  const fontSize = `${100 / (WIDTH * 0.6)}cqw`;

  useEffect(() => {
    if (reduced) return undefined;
    let A = 1;
    let B = 0.6;
    let last = 0;
    let raf;
    const tick = (now) => {
      if (now - last >= FRAME_MS) {
        last = now;
        A += 0.04;
        B += 0.02;
        setFrame(renderDonut(A, B));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <div aria-hidden="true" className={`overflow-hidden [container-type:inline-size] ${className}`}>
      <pre className="font-mono text-ink" style={{ fontSize, lineHeight: fontSize }}>
        {frame}
      </pre>
    </div>
  );
}

export default AsciiDonut;
