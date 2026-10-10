import type { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
  className?: string;
  children: ReactNode;
};

export default function ButtonLink({
  href,
  variant = "primary",
  external,
  download,
  className = "",
  children,
}: Props) {
  const base =
    "btn-shine inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const styles =
    variant === "primary"
      ? "bg-linear-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/45"
      : "border-2 border-accent text-violet-300 hover:-translate-y-0.5 hover:bg-accent/15 hover:shadow-lg hover:shadow-violet-500/20";

  return (
    <a
      href={href}
      download={download}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
