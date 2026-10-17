import { ExternalLink, FileDown, Mail } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";
const solid = `inline-flex items-center justify-center gap-2 bg-night px-6 py-3 font-semibold text-snow transition-colors hover:bg-lavender hover:text-night ${focusRing}`;
const outline = `inline-flex items-center justify-center gap-2 border-2 border-night px-6 py-3 font-semibold transition-colors hover:bg-peach ${focusRing}`;

function ContactSection() {
  return (
    <section id="contacto" className="mx-auto max-w-[1280px] scroll-mt-16 px-4 py-16 md:px-8">
      <div className="border-2 border-ink bg-mint p-8 text-night shadow-[8px_8px_0_rgb(var(--ink))] md:p-12">
        <SectionHeading>Contacto</SectionHeading>
        <p className="mb-8 mt-4 max-w-xl text-lg">
          Busco práctica profesional en IA y ciencia de datos. Si tu equipo tiene un problema real
          que resolver, escríbeme.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${profile.email}`} className={solid}>
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={outline}>
            LinkedIn
            <ExternalLink size={18} aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={outline}>
            GitHub
            <ExternalLink size={18} aria-hidden="true" />
          </a>
          {profile.cvAvailable ? (
            <a href={profile.cvUrl} download className={outline}>
              <FileDown size={18} aria-hidden="true" />
              Descargar CV en PDF
            </a>
          ) : (
            <span className="inline-flex items-center justify-center gap-2 border-2 border-dashed border-night px-6 py-3 font-semibold">
              <FileDown size={18} aria-hidden="true" />
              CV disponible pronto
            </span>
          )}
        </div>
      </div>
      <p className="mt-10 text-sm">© 2026 {profile.name}. Hecho a mano con React y Tailwind.</p>
    </section>
  );
}

export default ContactSection;
