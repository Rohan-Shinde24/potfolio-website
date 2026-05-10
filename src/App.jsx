import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Contact, Experience, Hero, Navbar, Skills, Projects, CustomCursor, TechMarquee } from "./components";
import BackToTop from "./components/BackToTop";

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
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-[var(--color-bg)] transition-colors duration-500">
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <TechMarquee />
            
            <div className="max-container flex flex-col gap-32 py-32">
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

