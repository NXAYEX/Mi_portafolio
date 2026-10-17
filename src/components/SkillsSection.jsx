import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills, tools, strengths } from "../data/about";

const chipColors = ["bg-mint", "bg-lavender", "bg-peach"];

function SkillsSection() {
  return (
    <section id="habilidades" className="mx-auto max-w-[1280px] scroll-mt-16 px-4 py-16 md:px-8">
      <SectionHeading>Habilidades</SectionHeading>
      <p className="mb-10 mt-4 max-w-xl text-lg">
        Cada habilidad enlaza al proyecto donde la puedes revisar.
      </p>

      <ul className="border-t-2 border-ink">
        {skills.map(({ name, detail, projectSlug, projectName }) => (
          <li
            key={name}
            className="grid gap-3 border-b border-line py-6 md:grid-cols-[1fr_1fr_200px] md:items-center md:gap-8"
          >
            <h3 className="font-display text-xl font-extrabold uppercase">{name}</h3>
            <p>{detail}</p>
            <Link
              to={`/proyectos/${projectSlug}`}
              className="inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4 hover:bg-mint hover:text-night focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
            >
              {projectName}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-display text-xl font-extrabold uppercase">Herramientas</h3>
          <ul className="border-t-2 border-ink">
            {tools.map(({ name, level }) => (
              <li key={name} className="flex justify-between border-b border-line py-2">
                <span className="font-semibold">{name}</span>
                <span className="text-sm">{level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-display text-xl font-extrabold uppercase">Cómo trabajo</h3>
          <ul className="flex flex-wrap gap-3">
            {strengths.map((strength, index) => (
              <li
                key={strength}
                className={`border-2 border-ink px-4 py-2 font-display text-xl font-extrabold uppercase ${chipColors[index % 3]} text-night`}
              >
                {strength}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
