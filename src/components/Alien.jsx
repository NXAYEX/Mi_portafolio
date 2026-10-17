// Alien con lupa dibujado en SVG: representa la "caja negra" que LIME ayuda a explicar. Es decorativo.
function Alien({ className = "" }) {
  return (
    <svg
      viewBox="0 0 140 190"
      aria-hidden="true"
      className={`stroke-ink ${className}`}
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M70 118 C70 140 66 160 58 182" />
      <path d="M70 130 L40 150" />
      <path d="M70 128 L100 112" />
      <path d="M52 182 H66 M76 182 H62" />
      <path
        d="M70 6 C26 6 14 52 28 80 C38 100 54 112 70 112 C86 112 102 100 112 80 C126 52 114 6 70 6 Z"
        fill="#B8E6CF"
      />
      <ellipse cx="48" cy="58" rx="13" ry="22" transform="rotate(24 48 58)" fill="#16161D" />
      <ellipse cx="92" cy="58" rx="13" ry="22" transform="rotate(-24 92 58)" fill="#16161D" />
      <circle cx="45" cy="50" r="3" fill="#F2F3EF" stroke="none" />
      <circle cx="95" cy="50" r="3" fill="#F2F3EF" stroke="none" />
      <path d="M60 92 Q70 98 80 92" />
      <circle cx="116" cy="96" r="20" fill="#FFCDB8" />
      <path d="M102 112 L94 124" strokeWidth="6" />
    </svg>
  );
}

export default Alien;
