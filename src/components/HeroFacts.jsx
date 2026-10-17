import { heroFacts } from "../data/profile";

// Tres datos reales de los proyectos, en filas con regla, no en tarjetas.
function HeroFacts() {
  return (
    <ol className="grid border-t-2 border-ink md:grid-cols-3">
      {heroFacts.map(({ label, detail }, index) => (
        <li
          key={label}
          className="flex items-baseline gap-4 border-b border-line px-1 py-4 md:border-b-0 md:border-r md:px-6 md:last:border-r-0"
        >
          <span className="font-display text-2xl font-black text-ink/40">0{index + 1}</span>
          <div>
            <p className="font-display text-xl font-extrabold uppercase">{label}</p>
            <p className="text-sm">{detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default HeroFacts;
