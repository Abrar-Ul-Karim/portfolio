
import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { aboutParagraphs, education } from "@/portfolio";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className="space-y-4 text-[15px] leading-7 text-muted sm:space-y-5 sm:text-base sm:leading-8">
          {aboutParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap size={20} className="text-accent" />
              <h3 className="text-sm font-medium">Education</h3>
            </div>

            <div className="border-l border-border pl-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <p className="text-sm font-medium text-foreground">
                  {education.degree}
                </p>
                <span className="shrink-0 font-mono text-[10px] text-muted">
                  {education.period}
                </span>
              </div>

              <p className="mt-2 text-sm text-accent">
                {education.university}
              </p>

              <p className="mt-3 text-sm leading-7 text-muted">
                Focused on full-stack development, software architecture, and
                machine learning.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

