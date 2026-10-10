import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  id: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  children: ReactNode;
};

export default function Section({ id, title, subtitle, eyebrow, children }: Props) {
  return (
    <section className="border-t border-border py-12 sm:py-14 md:py-20">
      <div id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-6">
        <Reveal>
          <div className="mb-6 sm:mb-8">
            {eyebrow && (
              <p className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted sm:mb-4">
                <span className="h-px w-8 bg-muted/60" />
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            {subtitle && <p className="mt-3 max-w-xl text-sm text-muted">{subtitle}</p>}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
