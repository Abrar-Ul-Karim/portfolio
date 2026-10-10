import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { education } from "@/portfolio";

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Academic background and foundation in computer science."
    >
      <Reveal>
        <article className="card border-l-2 border-l-accent p-5 sm:p-8 md:p-10">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center md:gap-8">
            <div>
              <h3 className="max-w-xl text-xl font-semibold leading-snug sm:text-2xl md:text-3xl">
                {education.university}
              </h3>
              <p className="mt-3 text-sm">{education.degree}</p>
              <p className="mt-3 font-mono text-[11px] text-muted">
                {education.location} · {education.period}
              </p>
            </div>

            <div className="border-t border-border pt-5 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">CGPA</p>
              <p className="mt-1 text-4xl font-semibold sm:text-5xl">
                {education.cgpa}
                <span className="ml-1 font-mono text-xs text-muted">/ {education.cgpaScale}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-1.5 border-t border-border pt-5 text-sm sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-2 sm:pt-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Academic achievement
            </span>
            <span>
              <strong className="font-medium">{education.achievement}</strong>{" "}
              <span className="font-mono text-[11px] text-muted">{education.achievementDetail}</span>
            </span>
          </div>
        </article>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="mb-4 mt-8 text-sm font-medium sm:mt-12">Relevant Coursework</h3>
        <ul className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <li key={course} className="chip">
              {course}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
