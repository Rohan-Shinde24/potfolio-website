import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "./components/CustomCursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import JourneySection from "./components/JourneySection";
import SkillsSection from "./components/SkillsSection";
import PhilosophySection from "./components/PhilosophySection";
import ContactSection from "./components/ContactSection";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
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
    <div className="bg-[#050505] min-h-screen text-[#FAFAFA] font-sans selection:bg-white selection:text-black">
      {/* Global Grain Texture */}
      <div className="bg-grain" />
      
      {/* Custom Interactions */}
      <CustomCursor />
      <Navigation />

      {/* Main Content Flow */}
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <JourneySection />
        <SkillsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
