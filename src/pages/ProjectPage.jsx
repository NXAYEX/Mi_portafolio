import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import FichaSection from "../components/FichaSection";
import Alien from "../components/Alien";
import ProjectCover from "../components/ProjectCover";
import { getProject, projects } from "../data/projects";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink";

function ProjectNotFound() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 py-24 md:px-8">
      <h1 className="font-display text-2xl font-black uppercase">No encontré ese proyecto</h1>
      <p className="mt-4 text-lg">El enlace puede estar mal escrito o el proyecto ya no existe.</p>
      <a
        href="/#proyectos"
        className={`mt-8 inline-block bg-ink px-6 py-3 font-semibold text-paper hover:bg-mint hover:text-ink ${focusRing}`}
      >
        Volver a los proyectos
      </a>
    </div>
  );
}

function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    document.title = project
      ? `${project.name} — Nayely Pérez Berna`
      : "Proyecto no encontrado — Nayely Pérez Berna";
  }, [project]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main>
          <ProjectNotFound />
        </main>
      </>
    );
  }

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1280px] px-4 py-10 md:px-8 md:py-16">
        <a
          href="/#proyectos"
          className={`inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 ${focusRing}`}
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Volver a los proyectos
        </a>

        <header className="mb-12 mt-8 grid gap-8 md:grid-cols-[1fr_360px] md:items-end">
          <div>
            <p className="mb-3 font-display text-lg font-extrabold uppercase tracking-wide">
              {project.number} · {project.year} · {project.status}
            </p>
            <h1 className="font-display text-2xl font-black uppercase md:text-3xl [text-shadow:4px_4px_0_#CFC6F2]">
              {project.title ?? project.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg">{project.role}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="border border-ink px-2 py-0.5 text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <ProjectCover project={project} className="w-full" />
        </header>

        <FichaSection
          label="Problema"
          aside={project.slug === "xai-retina" ? <Alien className="w-28 shrink-0" /> : null}
        >
          <p>{project.problem}</p>
        </FichaSection>
        <FichaSection label="Mi aporte">
          {project.contribution.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </FichaSection>
        <FichaSection label="Proceso y herramientas">
          <p>{project.process}</p>
        </FichaSection>
        <FichaSection label="Resultado y aprendizaje">
          <p>{project.result}</p>
          <p>
            <strong className="font-semibold">Qué mejoraría:</strong> {project.improvement}
          </p>
        </FichaSection>
        <FichaSection label="Evidencia">
          <ul className="flex flex-wrap gap-3">
            {project.evidence.map(({ label, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 bg-ink px-6 py-3 font-semibold text-paper transition-colors hover:bg-mint hover:text-ink ${focusRing}`}
                >
                  {label}
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </FichaSection>

        <Link
          to={`/proyectos/${next.slug}`}
          className={`flex items-center justify-between border-y-2 border-ink py-6 transition-colors hover:bg-mint/40 ${focusRing}`}
        >
          <span>
            <span className="block text-sm">Siguiente proyecto</span>
            <span className="font-display text-2xl font-black uppercase">{next.name}</span>
          </span>
          <ArrowRight size={28} aria-hidden="true" />
        </Link>
      </main>
    </>
  );
}

export default ProjectPage;
