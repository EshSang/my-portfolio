import CursorGlow   from "@/components/CursorGlow";
import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import About         from "@/components/About";
import Experience    from "@/components/Experience";
import Skills        from "@/components/Skills";
import Projects      from "@/components/Projects";
import Achievements  from "@/components/Achievements";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f1f5f9] overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
