// Título de sección con sombra lavanda, igual en todas las secciones del inicio.
function SectionHeading({ children }) {
  return (
    <h2 className="font-display text-3xl font-black uppercase [text-shadow:4px_4px_0_#CFC6F2]">
      {children}
    </h2>
  );
}

export default SectionHeading;
