
import {
  BadgeCheck,
  CalendarDays,
  Clock,
  Cpu,
  Database,
  ExternalLink,
  FileText,
  Gauge,
  HardDrive,
  Activity,
  type LucideIcon,
} from "lucide-react";

import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { research } from "@/portfolio";

const metricIcons: Record<string, LucideIcon> = {
  time: Clock,
  memory: HardDrive,
  cache: Cpu,
  efficiency: Gauge,
};

export default function Research() {
  return (
    <Section id="research" title="Research Work & Publications">
      <div className="space-y-7">
        {research.map((item, index) => {
          const isPublication = "algorithms" in item;

          const doiUrl =
            isPublication && item.doi
              ? `https://doi.org/${item.doi}`
              : undefined;

          return (
            <Reveal key={item.title}>
              <article className="card relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/70 to-transparent"
                />

                <div className="p-5 sm:p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                        item.status === "Accepted"
                          ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                          : "border-accent/30 bg-accent/15 text-violet-200"
                      }`}
                    >
                      {item.status === "Accepted" ? (
                        <BadgeCheck size={14} />
                      ) : (
                        <FileText size={14} />
                      )}
                      {item.status}
                    </span>

                    {isPublication && item.venue && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/15 px-3 py-1 text-xs font-medium text-violet-200">
                        <FileText size={14} />
                        {item.venue}
                      </span>
                    )}

                    {!isPublication && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-black/20 px-3 py-1 text-xs text-muted">
                        <CalendarDays size={14} />
                        {item.period}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 max-w-3xl text-xl font-semibold leading-snug sm:mt-6 sm:text-2xl md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted sm:mt-5 sm:text-base sm:leading-8">
                    {item.summary}
                  </p>
                </div>

                {isPublication && (
                  <div className="grid gap-7 border-t border-border px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 lg:grid-cols-[1.25fr_1fr]">
                    <div>
                      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        Algorithms compared
                      </p>

                      <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                        {item.algorithms?.map((algo) => (
                          <li
                            key={algo.short}
                            className="tile rounded-xl border border-border bg-black/20 p-3.5 last:col-span-2 sm:p-4"
                          >
                            <p className="font-display text-lg font-semibold text-violet-300">
                              {algo.short}
                            </p>
                            <p className="mt-0.5 text-xs text-muted">
                              {algo.name}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        Metrics analyzed
                      </p>

                      <ul className="space-y-2.5 sm:space-y-3">
                        {item.metrics?.map((metric) => {
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
                )}

                {!isPublication && (
                  <div className="space-y-7 border-t border-border px-5 py-6 sm:px-8 sm:py-8 md:px-10">
                    <div>
                      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        Research Methodology
                      </p>

                      <div className="grid gap-3 sm:grid-cols-3">
                        {item.methodology.map((group) => (
                          <div
                            key={group.category}
                            className="tile rounded-xl border border-border bg-black/20 p-4"
                          >
                            <div className="mb-3 flex items-center gap-2 text-violet-300">
                              <Cpu size={16} />
                              <h4 className="text-sm font-semibold">
                                {group.category}
                              </h4>
                            </div>

                            <ul className="space-y-2">
                              {group.methods.map((method) => (
                                <li
                                  key={method}
                                  className="text-xs leading-5 text-muted"
                                >
                                  {method}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        Forecasting Performance
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {item.evaluation.map((result) => (
                          <div
                            key={result.label}
                            className="tile rounded-xl border border-border bg-black/20 p-4"
                          >
                            <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                              {result.label}
                            </p>
                            <p className="mt-2 text-xl font-semibold text-violet-300 sm:text-2xl">
                              {result.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Key Finding */}
                    <div className="tile rounded-xl border border-accent/30 bg-accent/10 p-4 sm:p-5">
                      <div className="flex items-center gap-2 text-violet-300">
                        <Activity size={17} />
                        <p className="font-mono text-[11px] uppercase tracking-[0.15em]">
                          Key Research Finding
                        </p>
                      </div>

                      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <span className="text-3xl font-bold text-violet-300 sm:text-4xl">
                          {item.keyFinding.value}
                        </span>
                        <span className="text-sm text-foreground">
                          {item.keyFinding.label}
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-6 text-muted">
                        {item.keyFinding.comparison}
                      </p>
                    </div>

                    <div>
                      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                        Data Sources
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.dataSources.map((source) => (
                          <span
                            key={source}
                            className="inline-flex items-center gap-2 rounded-lg border border-border bg-black/20 px-3 py-2 text-xs text-muted"
                          >
                            <Database size={14} className="text-violet-300" />
                            {source}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {isPublication && doiUrl && (
                  <div className="flex flex-col gap-4 border-t border-border bg-white/[0.02] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 md:px-10">
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        DOI
                      </p>
                      <p className="mt-1 break-all font-mono text-xs text-foreground/90 sm:text-sm">
                        {item.doi}
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
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

