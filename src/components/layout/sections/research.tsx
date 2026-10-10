import {
  BadgeCheck,
  Clock,
  Cpu,
  ExternalLink,
  FileText,
  Gauge,
  HardDrive,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { research } from "@/portfolio";

const metricIcons: Record<(typeof research.metrics)[number]["icon"], LucideIcon> = {
  time: Clock,
  memory: HardDrive,
  cache: Cpu,
  efficiency: Gauge,
};

export default function Research() {
  const doiUrl = `https://doi.org/${research.doi}`;

  return (
    <Section id="research" title="Research Work & Publications">
      <Reveal>
        <article className="card relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/70 to-transparent"
          />

          {/* Header */}
          <div className="p-5 sm:p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <BadgeCheck size={14} />
                {research.status}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-medium text-violet-200">
                <FileText size={14} />
                {research.venue}
              </span>
            </div>

            <h3 className="mt-5 max-w-3xl text-xl font-semibold leading-snug sm:mt-6 sm:text-2xl md:text-3xl">
              {research.title}
            </h3>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
              {research.summary}
            </p>
          </div>

          {/* Algorithms + Metrics */}
          <div className="grid gap-7 border-t border-border px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Algorithms compared
              </p>
              <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {research.algorithms.map((algo) => (
                  <li
                    key={algo.short}
                    className="tile rounded-xl border border-border bg-black/20 p-3.5 last:col-span-2 sm:p-4"
                  >
                    <p className="font-display text-lg font-semibold text-violet-300">
                      {algo.short}
                    </p>
                    <p className="mt-0.5 text-xs text-muted">{algo.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Metrics analyzed
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                {research.metrics.map((metric) => {
                  const Icon = metricIcons[metric.icon];
                  return (
                    <li
                      key={metric.label}
                      className="tile flex items-center gap-3 rounded-xl border border-border bg-black/20 px-4 py-3 sm:py-3.5"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-violet-300">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm">{metric.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* DOI footer */}
          <div className="flex flex-col gap-4 border-t border-border bg-white/[0.02] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 md:px-10">
            <div className="min-w-0">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">DOI</p>
              <p className="mt-1 break-all font-mono text-xs text-foreground/90 sm:text-sm">
                {research.doi}
              </p>
            </div>

            <a
              href={doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-linear-to-r from-indigo-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all active:scale-[0.97] hover:-translate-y-0.5 hover:shadow-violet-500/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-auto sm:py-2.5"
            >
              View Paper <ExternalLink size={15} />
            </a>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
