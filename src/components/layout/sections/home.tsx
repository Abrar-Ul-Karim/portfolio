import Image from "next/image";
import { Download, Rocket } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import TypingText from "@/components/ui/TypingText";
import { profile } from "@/portfolio";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-24 sm:pb-12 sm:pt-28 lg:pb-16 lg:pt-30">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 sm:gap-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* ---------- Text ---------- */}
        <div>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/15 px-4 py-2 text-sm text-violet-200">
            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-400" />
            {profile.status}
          </span>

          <h1 className="mt-6">
            <span className="block font-display text-2xl font-bold leading-none sm:text-3xl lg:text-4xl">
              Hi, I&apos;m
            </span>
            <span className="-ml-[0.05em] mt-3 block bg-linear-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text pb-2 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-transparent min-[400px]:text-5xl sm:text-6xl lg:text-7xl">
              {profile.name}
            </span>
          </h1>

          <p className="mt-3 min-h-8 font-display text-xl font-medium text-muted sm:min-h-10 sm:text-2xl lg:min-h-12 lg:text-3xl">
            <TypingText words={profile.roles} />
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:mt-6 sm:text-lg sm:leading-8">
            {profile.tagline}
          </p>

          <p className="mt-5 font-mono text-[11px] tracking-wide text-muted/80 sm:text-xs">
            {profile.stack.join(" · ")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <ButtonLink href="#projects" className="w-full sm:w-auto">
              <Rocket size={17} /> View Projects
            </ButtonLink>
            <ButtonLink
              href={profile.resume}
              variant="secondary"
              download
              className="w-full sm:w-auto"
            >
              <Download size={17} /> Download Resume
            </ButtonLink>
          </div>
        </div>

        {/* ---------- ছবি: ফোনে আগে (order-first), desktop এ ডান দিকে ---------- */}
        <div className="group relative order-first mx-auto w-full max-w-[17.5rem] sm:max-w-sm lg:order-none lg:max-w-none">
          {/* Background glow */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[112%] w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-b from-violet-500/35 to-indigo-600/10 blur-2xl transition-transform duration-700 group-hover:scale-110"
          />

          {/* Card */}
          <div className="relative rounded-3xl border-2 border-white/10 bg-white/[0.03] p-2.5 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-accent/60 group-hover:shadow-2xl group-hover:shadow-violet-500/30 sm:p-3">
            <Image
              src={profile.image}
              alt={`Portrait of ${profile.name}`}
              width={640}
              height={800}
              priority
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 40vw"
              className="aspect-4/5 w-full rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
