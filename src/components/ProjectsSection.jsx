import ProjectRow from "./ProjectRow";
import RetroComputer from "./RetroComputer";
import { projects } from "../data/projects";

function ProjectsSection() {
  return (
    <section id="proyectos" className="mx-auto max-w-[1280px] scroll-mt-16 px-4 py-16 md:px-8">
      <div className="mb-10 flex items-end justify-between gap-8">
        <div>
          <h2 className="font-display text-3xl font-black uppercase [text-shadow:4px_4px_0_#CFC6F2]">
            Proyectos
          </h2>
          <p className="mt-4 max-w-xl text-lg">
            Tres proyectos, tres problemas reales: lectura con dislexia, compras sin ver y
            diagnósticos que se pueden explicar. Cada ficha cuenta qué hice yo y trae su evidencia.
          </p>
        </div>
        <RetroComputer className="hidden w-32 shrink-0 md:block" />
      </div>

      <ul className="border-t-2 border-ink">
        {projects.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
