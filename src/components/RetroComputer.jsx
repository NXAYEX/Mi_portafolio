// Computadora antigua dibujada en SVG. Es decorativa.
function RetroComputer({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 180"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="#16161D"
      strokeWidth="4"
      strokeLinejoin="round"
      strokeLinecap="round"
    >
      <rect x="22" y="12" width="156" height="118" rx="14" fill="#CFC6F2" />
      <rect x="40" y="28" width="120" height="84" rx="10" fill="#16161D" />
      <g fill="#B8E6CF" stroke="none" fontFamily="ui-monospace, Menlo, Consolas, monospace" fontSize="11">
        <text x="50" y="50">&gt; hola, mundo</text>
        <text x="50" y="68">&gt; import ada</text>
        <text x="50" y="86">&gt; turing.run()</text>
      </g>
      <rect x="50" y="94" width="8" height="3" fill="#FFCDB8" stroke="none" />
      <path d="M78 130 L72 150 H128 L122 130" fill="#CFC6F2" />
      <rect x="44" y="150" width="112" height="18" rx="6" fill="#FFCDB8" />
      <circle cx="160" cy="121" r="3" fill="#B8E6CF" />
    </svg>
  );
}

export default RetroComputer;
