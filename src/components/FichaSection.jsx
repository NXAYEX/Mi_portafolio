// Bloque de una ficha: etiqueta a la izquierda, contenido a la derecha (y un elemento opcional al lado).
function FichaSection({ label, children, aside = null }) {
  return (
    <section className="grid gap-3 border-t-2 border-ink py-8 md:grid-cols-[200px_1fr] md:gap-8">
      <h2 className="font-display text-xl font-extrabold uppercase">{label}</h2>
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl space-y-3 text-lg">{children}</div>
        {aside}
      </div>
    </section>
  );
}

export default FichaSection;
