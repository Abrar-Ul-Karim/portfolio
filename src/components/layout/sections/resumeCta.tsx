import { Download, ExternalLink } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/portfolio";


export default function ResumeCta() {
  return (
    <section className="border-t border-border py-14">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-light md:text-3xl">Want to know more about me?</h2>
            <p className="mt-1 text-sm text-muted">
              Download my resume to learn more about my education, skills and projects.
            </p>
          </div>
          <div className="flex gap-3">
            <ButtonLink href={profile.resume} download>
              Download resume <Download size={16} />
            </ButtonLink>
            <ButtonLink href={profile.resume} variant="secondary" external>
              View resume <ExternalLink size={16} />
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
