// Bloque de una ficha: etiqueta a la izquierda, contenido a la derecha, separados por una regla.
function FichaSection({ label, children }) {
  return (
    <section className="grid gap-3 border-t-2 border-ink py-8 md:grid-cols-[200px_1fr] md:gap-8">
      <h2 className="font-display text-xl font-extrabold uppercase">{label}</h2>
      <div className="max-w-2xl space-y-3 text-lg">{children}</div>
    </section>
  );
}

export default FichaSection;
