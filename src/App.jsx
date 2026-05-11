import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Contact, Experience, Hero, Navbar, Projects, CustomCursor, TechMarquee, ShapeGrid, DotGrid } from "./components";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5,
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
          {/* Global Background Grid - Extremely Subtle */}
          <div className="fixed inset-0 z-0 opacity-[0.15] pointer-events-none">
            <DotGrid
              dotSize={2}
              gap={30}
              baseColor="var(--color-text)"
              activeColor="var(--color-primary)"
              proximity={100}
              shockRadius={150}
              shockStrength={3}
              resistance={500}
              returnDuration={1.2}
            />
          </div>

          {/* Background Blobs for Color */}
          <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--color-primary)] opacity-[0.05] rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--color-secondary)] opacity-[0.05] rounded-full blur-[120px]" />
          </div>

          <CustomCursor />
          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            
            <div className="max-container flex flex-col gap-32 py-32">
              <About />
              <Experience />
            </div>

            <TechMarquee />

            <div className="max-container flex flex-col gap-32 py-32">
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

