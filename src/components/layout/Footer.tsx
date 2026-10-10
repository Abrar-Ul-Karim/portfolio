import { ArrowUp } from "lucide-react";
import { profile } from "@/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center sm:px-6">
        <p className="text-sm text-muted">
          Designed &amp; Built by{" "}
          <span className="font-medium text-foreground">{profile.name}</span> © {year}
        </p>

        <a
          href="#"
          aria-label="Back to top"
          title="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-foreground/80 transition-all hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/15 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
}