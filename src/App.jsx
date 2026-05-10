import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Contact, Experience, Hero, Navbar, Skills, Projects, CustomCursor, TechMarquee } from "./components";
import BackToTop from "./components/BackToTop";

function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    // Smooth scrolling via vanilla Lenis (avoids duplicate React copy from @studio-freight/react-lenis)
    const lenis = new Lenis({ lerp: 0.08, smooth: true });
    const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="noise-overlay" />
        <div ref={spotlightRef} className="spotlight" />
        <CustomCursor />

          <div className='relative z-0 bg-white transition-colors duration-500'>
            <Navbar />
            
            <main className="relative z-10 space-y-32 pb-32">
              <Hero />
              <TechMarquee />
              
              <div className="max-container space-y-32">
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
              </div>
            </main>

            <BackToTop />
          </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
