import SectionHeading from "./SectionHeading";
import { aboutText, timeline, relevantCourses } from "../data/about";

function AboutSection() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-[1280px] scroll-mt-16 px-4 py-16 md:px-8">
      <SectionHeading>Sobre mí</SectionHeading>
      <div className="mt-8 grid gap-12 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="max-w-lg text-lg">{aboutText}</p>
          <h3 className="mb-3 mt-8 font-display text-xl font-extrabold uppercase">
            Cursos relevantes
          </h3>
          <ul className="space-y-1">
            {relevantCourses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm">Idiomas: inglés, nivel básico-intermedio.</p>
        </div>

        <ol className="border-t-2 border-ink">
          {timeline.map(({ period, title, place }) => (
            <li
              key={title}
              className="grid gap-1 border-b border-line py-5 sm:grid-cols-[130px_1fr] sm:gap-6"
            >
              <span className="font-display text-xl font-extrabold uppercase">{period}</span>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{place}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default AboutSection;
