import { Award, GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { aboutParagraphs, certifications, education } from "@/portfolio";

export default function About() {
  return (
    <Section id="about" title="About Me" eyebrow="Get to know me">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
        <Reveal className="space-y-4 text-[15px] leading-7 text-muted sm:space-y-5 sm:text-base sm:leading-8">
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="card space-y-6 p-5 sm:space-y-8 sm:p-6">
            {/* Education */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/5">
                  <GraduationCap size={16} className="text-accent" />
                </span>
                <h3 className="text-sm font-medium">Education</h3>
              </div>

              <div className="rounded-xl border border-border bg-black/20 p-4">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                  <p className="text-sm">{education.degree}</p>
                  <span className="shrink-0 font-mono text-[10px] text-muted">
                    {education.period}
                  </span>
                </div>
                <p className="mt-2 text-xs text-accent">{education.university}</p>
                <p className="mt-3 text-xs text-muted">
                  Focused on full-stack development, software architecture, and machine learning.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/5">
                  <Award size={16} className="text-accent" />
                </span>
                <h3 className="text-sm font-medium">Certifications</h3>
              </div>

              {certifications.length === 0 ? (
                <p className="text-xs text-muted">Certifications will be added soon.</p>
              ) : (
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="rounded-xl border border-border bg-black/20 p-4 text-sm"
                    >
                      {c.name}
                      <span className="mt-1 block text-xs text-muted">
                        {c.issuer} · {c.year}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
