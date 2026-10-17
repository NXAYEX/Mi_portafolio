import { Mail } from "lucide-react";
import AsciiPortrait from "./AsciiPortrait";
import AsciiDonut from "./AsciiDonut";
import HeroFacts from "./HeroFacts";
import { nayelyArt } from "../data/asciiArt";
import { profile } from "../data/profile";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

// Título tipo sello: contorno y sombra dura desplazada, del color del texto principal
const stamp =
  "block font-display font-black uppercase text-3xl md:text-4xl lg:text-3xl xl:text-4xl [-webkit-text-stroke:2px_rgb(var(--ink))] [text-shadow:4px_4px_0_rgb(var(--ink)),8px_8px_0_rgb(var(--ink))]";

function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[1280px] px-4 pb-12 pt-10 md:px-8 md:pt-16">
      {/* Tres columnas con los costados iguales para que el título quede siempre centrado */}
      <div className="grid gap-12 lg:grid-cols-[240px_1fr_240px] lg:items-center lg:gap-8 xl:grid-cols-[270px_1fr_270px]">
        <div className="text-center lg:order-2">
          <h1 className="mb-8">
            <span className={`${stamp} text-mint`}>{profile.firstLine}</span>
            <span className={`${stamp} mt-4 text-lavender`}>{profile.secondLine}</span>
          </h1>
          <p className="mb-3 font-display text-lg font-extrabold uppercase tracking-wide">
            {profile.role}
          </p>
          <p className="mx-auto mb-2 max-w-md text-lg">{profile.pitch}</p>
          <p className="mx-auto mb-8 max-w-md text-sm">{profile.seeking}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className={`bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-mint hover:text-night ${focusRing}`}
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center justify-center gap-2 border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-peach hover:text-night ${focusRing}`}
            >
              <Mail size={18} aria-hidden="true" />
              Escribirme un correo
            </a>
          </div>
        </div>

        {/* En celular tu retrato va antes que la dona; en pantalla ancha, la dona a la izquierda y tú a la derecha */}
        <div className="mx-auto w-full max-w-[360px] lg:order-3 lg:max-w-none">
          <AsciiPortrait
            art={nayelyArt}
            label="Retrato de Nayely dibujado con caracteres ASCII"
            caption="Nayely"
            detail="USM · Informática"
            scale={1.25}
            square
            shadowClass="bg-lavender"
          />
        </div>

        <div className="mx-auto w-full max-w-[280px] lg:order-1 lg:max-w-none">
          <AsciiDonut />
        </div>
      </div>

      <div className="mt-16">
        <HeroFacts />
      </div>

      {/*
        Retratos de Ada Lovelace y Alan Turing (guardados por si quieres volver a usarlos).
        Los dibujos siguen en src/data/asciiArt.js como adaArt y turingArt.
        Para mostrarlos: importa { adaArt, turingArt } arriba y pon esto dentro de la grilla:

        <AsciiPortrait
          art={adaArt}
          label="Retrato de Ada Lovelace dibujado con caracteres ASCII"
          caption="Ada Lovelace"
          detail="1815–1852"
          shadowClass="bg-mint"
        />
        <AsciiPortrait
          art={turingArt}
          label="Retrato de Alan Turing dibujado con caracteres ASCII"
          caption="Alan Turing"
          detail="1912–1954"
          shadowClass="bg-peach"
        />
      */}
    </section>
  );
}

export default Hero;
