import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Contact, Experience, Hero, Navbar, Projects, CustomCursor, TechMarquee, ShapeGrid, DotGrid } from "./components";
import BackToTop from "./components/BackToTop";
import { useInView } from "react-intersection-observer";

function App() {
  const [theme, setTheme] = useState("light");

  const { ref: techRef, inView: techInView } = useInView({ threshold: 0.2 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.2 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

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

  // Theme Switching Logic
  useEffect(() => {
    // Technical Expertise and Projects are DARK
    if (techInView || projectsInView) {
      setTheme("dark");
    } 
    // Contact is LIGHT
    else if (contactInView) {
      setTheme("light");
    } 
    // Default is LIGHT
    else {
      setTheme("light");
    }
  }, [techInView, projectsInView, contactInView]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div 
          className={`relative min-h-screen transition-colors duration-1000 ${
            theme === "dark" ? "bg-[#0A0A0B] text-white" : "bg-[#FCFCFD] text-[#1A1A1E]"
          }`}
          data-theme={theme}
        >
          {/* Global Background Grid */}
          <div className="fixed inset-0 z-0 opacity-[0.35] pointer-events-none transition-opacity duration-1000">
            <DotGrid
              dotSize={2.5}
              gap={38}
              baseColor={theme === "dark" ? "#FFFFFF" : "#000000"}
              activeColor={theme === "dark" ? "#FFFFFF" : "#000000"}
              proximity={140}
              speedTrigger={9999}
              shockRadius={0}
              shockStrength={0}
              resistance={500}
              returnDuration={1.2}
            />
          </div>

          <CustomCursor />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            
            <div className="max-container flex flex-col gap-16 md:gap-32 section-padding">
              <About />
              <Experience />
            </div>

            <div ref={techRef} className="w-full">
              <TechMarquee />
            </div>

            <div className="max-container flex flex-col gap-16 md:gap-32 section-padding">
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={contactRef}>
                <Contact />
              </div>
            </div>
          </main>

          <BackToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

