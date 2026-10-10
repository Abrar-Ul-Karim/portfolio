import { ArrowRight, ExternalLink } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/portfolio";

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Some of the projects I have worked on.">
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 100}>
            <article className="card flex h-full flex-col p-6 sm:p-7">
              <span className="font-mono text-[10px] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-semibold sm:text-2xl">{project.title}</h3>
              {project.subtitle && <p className="mt-1 text-xs text-accent">{project.subtitle}</p>}

              <p className="mt-5 text-sm leading-6 text-muted">{project.description}</p>

              <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Tech stack
              </p>
              <p className="mt-2 text-xs leading-5">{project.stack.join(" · ")}</p>

              <div className="mt-auto flex items-center gap-6 pt-7 text-sm sm:pt-8 sm:text-xs">
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 py-1 hover:text-accent"
                >
                  Live <ArrowRight size={13} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 py-1 hover:text-accent"
                >
                  GitHub <ExternalLink size={13} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
