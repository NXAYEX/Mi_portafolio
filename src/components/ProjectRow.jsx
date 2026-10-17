import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectCover from "./ProjectCover";

// Fila de la tabla editorial de proyectos. Toda la fila abre la ficha.
function ProjectRow({ project }) {
  const { slug, number, name, year, role, tools, hoverClass } = project;

  return (
    <li className="border-b-2 border-ink">
      <Link
        to={`/proyectos/${slug}`}
        className={`group grid gap-6 px-1 py-8 transition-colors md:grid-cols-[64px_1fr_240px] md:items-center md:px-4 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ink ${hoverClass}`}
      >
        <span className="font-display text-2xl font-black text-ink/40">{number}</span>

        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl font-black uppercase">{name}</h3>
            <span className="text-sm">{year}</span>
          </div>
          <p className="mt-2 max-w-xl text-lg">{role}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool} className="border border-ink px-2 py-0.5 text-sm">
                {tool}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center gap-1 font-semibold underline decoration-2 underline-offset-4">
            Leer la ficha de {name}
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>

        <ProjectCover project={project} className="w-full" />
      </Link>
    </li>
  );
}

export default ProjectRow;
