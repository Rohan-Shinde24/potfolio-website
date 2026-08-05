import { useEffect } from "react";
import Lenis from "lenis";
import Hero from "./components/Hero";
import HireMeSection from "./components/HireMeSection";
import { AboutSection, SkillsSection, ProjectsSection, ContactSection } from "./components/PlaceholderSections";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white min-h-screen text-[#0A0A0A]">
      <main>
        <Hero />
        <AboutSection />
        <HireMeSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
