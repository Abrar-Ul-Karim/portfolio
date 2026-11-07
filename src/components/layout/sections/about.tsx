
import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { aboutParagraphs, education } from "@/portfolio";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* About Description */}
        <Reveal className="space-y-4 text-[15px] leading-7 text-muted sm:space-y-5 sm:text-base sm:leading-8">
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Reveal>



        {/* Education Card */}
        <Reveal delay={120}>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="text-sm font-semibold text-foreground">
                Education
              </h3>
            </div>

            <div className="group rounded-xl border border-border bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-md dark:bg-white/[0.05] sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-mono font-medium uppercase tracking-[0.15em] text-muted">
                    Academic Background
                  </span>

                  <span className="shrink-0 text-xs font-mono text-muted">
                    {education.period}
                  </span>
                </div>

                <h4 className="text-base font-semibold leading-7 text-foreground transition-colors duration-300 group-hover:text-accent">
                  {education.degree}
                </h4>

                <p className="text-sm font-medium text-accent">
                  {education.university}
                </p>

                <div className="my-2 h-px bg-border" />

                <p className="text-sm leading-7 text-muted">
                  Focused on full-stack development, software architecture, and
                  machine learning.
                </p>
              </div>
            </div>
          </div>
        </Reveal>


      </div>
    </Section>
  );
}

