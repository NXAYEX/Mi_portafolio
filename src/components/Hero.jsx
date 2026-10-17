import { Mail } from "lucide-react";
import AsciiPortrait from "./AsciiPortrait";
import AsciiDonut from "./AsciiDonut";
import HeroFacts from "./HeroFacts";
import * as ascii from "../data/asciiArt";
import { profile } from "../data/profile";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

// Título tipo sello: contorno de tinta y sombra dura desplazada
const stamp =
  "block font-display font-black uppercase text-3xl md:text-4xl [-webkit-text-stroke:2px_#16161D] [text-shadow:4px_4px_0_#16161D,8px_8px_0_#16161D]";

const plateShadow = "shadow-[8px_8px_0_#16161D]";

function Hero() {
  // Si todavía no está guardado el ASCII propio en asciiArt.js, se muestra un aviso
  const selfArt = ascii.nayelyArt;

  return (
    <section id="inicio" className="mx-auto max-w-[1280px] px-4 pb-12 pt-10 md:px-8 md:pt-16">
      <h1 className="mb-12 text-center">
        <span className={`${stamp} text-mint`}>{profile.firstLine}</span>
        <span className={`${stamp} mt-4 text-lavender`}>{profile.secondLine}</span>
      </h1>

      <div className="grid gap-10 lg:grid-cols-[180px_1fr_340px] lg:items-center xl:grid-cols-[220px_1fr_420px]">
        <div className="text-center lg:col-start-2 lg:row-start-1">
          <p className="mb-3 font-display text-lg font-extrabold uppercase tracking-wide">
            {profile.role}
          </p>
          <p className="mx-auto mb-2 max-w-md text-lg">{profile.pitch}</p>
          <p className="mx-auto mb-8 max-w-md text-sm">{profile.seeking}</p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className={`bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-mint hover:text-ink ${focusRing}`}
            >
              Ver proyectos
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center justify-center gap-2 border-2 border-ink px-6 py-3 font-semibold transition-colors hover:bg-peach ${focusRing}`}
            >
              <Mail size={18} aria-hidden="true" />
              Escribirme un correo
            </a>
          </div>
          <AsciiDonut className="mx-auto mt-10 w-full max-w-[420px]" />
        </div>

        <div className="lg:col-start-3 lg:row-start-1">
          {selfArt ? (
            <AsciiPortrait
              art={selfArt}
              caption="Nayely"
              years="USM · Informática"
              plateClass="bg-ink"
              textClass="text-paper"
              shadowClass={`${plateShadow.replace("#16161D", "#CFC6F2")}`}
              sizeClass="max-w-[420px]"
            />
          ) : (
            <p className="border-2 border-dashed border-ink p-6 text-center text-sm">
              Falta guardar tu retrato: pega el ASCII en <code>src/data/asciiArt.js</code> con el
              nombre <code>nayelyArt</code>.
            </p>
          )}
        </div>

        <div className="mx-auto grid w-full max-w-[420px] grid-cols-2 gap-6 lg:col-start-1 lg:row-start-1 lg:max-w-none lg:grid-cols-1">
          <AsciiPortrait
            art={ascii.adaArt}
            caption="Ada Lovelace"
            years="1815–1852"
            plateClass="bg-lavender"
            shadowClass={plateShadow}
          />
          <AsciiPortrait
            art={ascii.turingArt}
            caption="Alan Turing"
            years="1912–1954"
            plateClass="bg-mint"
            shadowClass={plateShadow}
          />
        </div>
      </div>

      <div className="mt-14">
        <HeroFacts />
      </div>
    </section>
  );
}

export default Hero;
