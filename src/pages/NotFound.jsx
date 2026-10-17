import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Alien from "../components/Alien";

function NotFound() {
  useEffect(() => {
    document.title = "Página no encontrada — Nayely Pérez Berna";
  }, []);

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 px-4 py-20 text-center md:px-8">
        <Alien className="w-40" />
        <h1 className="font-display text-3xl font-black uppercase [text-shadow:4px_4px_0_#CFC6F2]">
          Error 404
        </h1>
        <p className="max-w-md text-lg">
          Esta página es una caja negra: ni el alien con lupa encontró lo que buscabas.
        </p>
        <a
          href="/"
          className="bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-mint hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
        >
          Volver al inicio
        </a>
      </main>
    </>
  );
}

export default NotFound;
