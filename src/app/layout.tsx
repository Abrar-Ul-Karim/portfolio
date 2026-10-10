import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Outfit } from "next/font/google";
import NetworkBackground from "@/components/ui/NetworkBackground";
import CursorEffects from "@/components/ui/CursorEffects";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// ⚠️ Deploy এর পর Vercel এর আসল link দিয়ে বদলাও
const SITE_URL = "https://abrar-karim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abrar Ul Karim | Full-Stack Developer",
  description:
    "Portfolio of Abrar Ul Karim, a Computer Science & Engineering undergraduate focused on full-stack web development and intelligent systems.",
  keywords: ["Full-Stack Developer", "Next.js", "NestJS", "Machine Learning", "Portfolio"],
  authors: [{ name: "Abrar Ul Karim" }],
  openGraph: {
    title: "Abrar Ul Karim | Full-Stack Developer",
    description: "Full-stack web development and intelligent systems.",
    type: "website",
    url: SITE_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0b24",
};

// Saved theme না থাকলে dark ই default। পেজ আঁকার আগেই চলে, তাই সাদা ঝলক আসে না
const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <NetworkBackground />
        <CursorEffects />
        {children}
      </body>
    </html>
  );
}

