
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
          <div className="group relative overflow-hidden rounded-xl border border-border/80 bg-[#1b1c38] p-5 transition-all duration-300 hover:border-accent/40 hover:bg-[#222342] sm:p-6">            <div className="flex items-center gap-3">
            <GraduationCap size={20} className="text-accent" />
            <h4 className="text-base font-semibold leading-7 text-foreground transition-colors duration-300 group-hover:text-accent">
              Education            </h4>
          </div>

            <div className="group relative overflow-hidden rounded-lg border border-border/70 bg-[#101126] p-5 transition-all duration-300 hover:border-accent/30 hover:bg-[#14152d] sm:p-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted">
                    Academic Background
                  </span>

                  <span className="text-[11px] font-mono text-muted">
                    {education.period}
                  </span>
                </div>

                <h4 className="text-base font-semibold leading-7 text-foreground transition-colors duration-300 group-hover:text-accent">
                  {education.degree}
                </h4>

                <p className="text-sm font-medium text-muted">
                  {education.university}
                </p>

                <div className="my-2 h-px w-full bg-border/70" />

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

