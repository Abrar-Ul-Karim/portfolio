"use client";

import { useEffect, useState } from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/portfolio";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // কোন section স্ক্রিনে আছে সেটা ধরে nav link highlight করা
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Esc চাপলে বা স্ক্রিন বড় হলে mobile menu বন্ধ
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage বন্ধ থাকলে শুধু এই session এ বদলাবে
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-6"
        aria-label="Main"
      >
        <a href="#" className="flex min-w-0 items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-white/5 font-mono text-xs">
            {profile.initials}
          </span>
          <span className="truncate text-sm font-medium">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`nav-link text-sm transition-colors hover:text-foreground ${
                  active === link.id ? "is-active text-foreground" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            title="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 text-foreground/80 transition-colors hover:bg-accent/15 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <Sun size={18} className="light:hidden" />
            <Moon size={18} className="hidden light:block" />
          </button>

          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full border-2 border-accent px-5 py-2 text-sm font-semibold text-violet-300 transition-colors hover:bg-accent/15 sm:inline-flex"
          >
            Resume <Download size={14} />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/5 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu: নিচে নামার animation সহ */}
      <div
        id="mobile-menu"
        inert={!open}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 py-3 sm:px-6">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center rounded-lg px-4 py-3 text-[15px] transition-colors ${
                      active === link.id
                        ? "bg-accent/15 text-foreground"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* ছোট ফোনে নাভবারে Resume বাটন নেই, তাই এখানে */}
            <a
              href={profile.resume}
              download
              className="mb-1 mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-accent px-5 py-3 text-sm font-semibold text-violet-300 transition-colors hover:bg-accent/15 sm:hidden"
            >
              Resume <Download size={14} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
