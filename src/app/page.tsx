import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/sections/home";
import About from "@/components/layout/sections/about";
import Skills from "@/components/layout/sections/skills";
import Projects from "@/components/layout/sections/projects";
import Research from "@/components/layout/sections/research";
import Education from "@/components/layout/sections/education";
import ResumeCta from "@/components/layout/sections/resumeCta";
import Contact from "@/components/layout/sections/contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
