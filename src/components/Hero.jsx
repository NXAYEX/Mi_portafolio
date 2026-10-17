import { Mail } from "lucide-react";
import AsciiPortrait from "./AsciiPortrait";
import RetroComputer from "./RetroComputer";
import HeroFacts from "./HeroFacts";
import { adaArt, turingArt } from "../data/asciiArt";
import { profile } from "../data/profile";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

// Título tipo sello: contorno de tinta y sombra dura desplazada
const stamp =
  "block font-display font-black uppercase text-3xl md:text-4xl [-webkit-text-stroke:2px_#16161D] [text-shadow:4px_4px_0_#16161D,8px_8px_0_#16161D]";

function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-[1280px] px-4 pb-12 pt-10 md:px-8 md:pt-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[260px_1fr_260px] lg:items-center">
        <div className="text-center sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1">
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
          <RetroComputer className="mx-auto mt-10 hidden w-40 lg:block" />
        </div>

        <div className="lg:col-start-1 lg:row-start-1">
          <AsciiPortrait
            art={adaArt}
            caption="Ada Lovelace"
            years="1815–1852"
            textClass="text-mint"
            shadowClass="bg-lavender"
            blobClass="rounded-[58%_42%_52%_48%/46%_54%_46%_54%]"
          />
        </div>
        <div className="lg:col-start-3 lg:row-start-1">
          <AsciiPortrait
            art={turingArt}
            caption="Alan Turing"
            years="1912–1954"
            textClass="text-lavender"
            shadowClass="bg-peach"
            blobClass="rounded-[44%_56%_48%_52%/56%_44%_56%_44%]"
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
