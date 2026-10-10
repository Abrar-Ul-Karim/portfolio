import {
  Binary,
  Boxes,
  Database,
  KeyRound,
  LayoutTemplate,
  Network,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { skillGroups, type Skill } from "@/portfolio";

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";

const lucideIcons: Record<NonNullable<Skill["icon"]>, LucideIcon> = {
  api: Webhook,
  key: KeyRound,
  database: Database,
  oop: Boxes,
  mvc: LayoutTemplate,
  architecture: Network,
  dsa: Binary,
};

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.devicon) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`${DEVICON_BASE}/${skill.devicon}/${skill.devicon}-original.svg`}
        alt=""
        width={16}
        height={16}
        loading="lazy"
        decoding="async"
        className={`h-4 w-4 shrink-0 ${skill.invert ? "invert" : ""}`}
      />
    );
  }

  if (skill.icon) {
    const Icon = lucideIcons[skill.icon];
    return <Icon size={16} className="shrink-0 text-accent" aria-hidden="true" />;
  }

  return <span className="h-1.5 w-1.5 rounded-full bg-accent" />;
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Technologies and development concepts I work with."
    >
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 70}
            className={group.wide ? "lg:col-span-2" : ""}
          >
            <div className="card h-full p-5 sm:p-6">
              <h3 className="mb-4 text-sm font-medium sm:mb-5">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill.name} className="chip">
                    <SkillIcon skill={skill} />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
