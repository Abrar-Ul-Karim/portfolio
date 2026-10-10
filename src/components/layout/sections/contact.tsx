import { ArrowUpRight, Download, ExternalLink, Mail, Phone } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/portfolio";

const contactCards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: <Mail size={18} />,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s|-/g, "")}`,
    icon: <Phone size={18} />,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: profile.linkedin,
    icon: <LinkedinIcon className="h-[18px] w-[18px]" />,
    external: true,
  },
  {
    label: "GitHub",
    value: "View my repositories",
    href: profile.github,
    icon: <GithubIcon className="h-[18px] w-[18px]" />,
    external: true,
  },
];

export default function Contact() {
  return (
    <section className="border-t border-border py-12 sm:py-16 md:py-24">
      <div id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 sm:px-6">
        {/* বড় CTA card */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-indigo-500/20 via-violet-500/10 to-transparent px-5 py-10 text-center sm:px-8 sm:py-14 md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/70 to-transparent"
            />

            <div className="relative">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/15 px-4 py-1.5 text-sm text-violet-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {profile.status}
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:mt-7 sm:text-4xl md:text-6xl">
                Let&apos;s build something{" "}
                <span className="bg-linear-to-r from-indigo-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                  meaningful
                </span>{" "}
                together.
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted sm:mt-6 sm:text-base sm:leading-8">
                Have a project in mind, an opportunity to discuss, or just want to say hello?
                I&apos;d be glad to hear from you.
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <ButtonLink href={`mailto:${profile.email}`} className="w-full sm:w-auto">
                  <Mail size={17} /> Start a Conversation
                </ButtonLink>
                <ButtonLink
                  href={profile.resume}
                  variant="secondary"
                  download
                  className="w-full sm:w-auto"
                >
                  <Download size={17} /> Download Resume
                </ButtonLink>
                <ButtonLink
                  href={profile.resume}
                  variant="secondary"
                  external
                  className="w-full sm:w-auto"
                >
                  <ExternalLink size={17} /> View Resume
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Contact cards */}
        <div className="mt-4 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {contactCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 70}>
              <a
                href={card.href}
                {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="card group flex h-full items-center gap-4 p-4 sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-violet-300 transition-colors group-hover:bg-accent group-hover:text-white">
                  {card.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{card.label}</span>
                  <span className="block truncate text-xs text-muted">{card.value}</span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}