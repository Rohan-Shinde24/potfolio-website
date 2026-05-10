import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ThemeProvider } from "./context/ThemeContext";
import { About, Contact, Experience, Hero, Navbar, Skills, Projects, CustomCursor, TechMarquee } from "./components";
import BackToTop from "./components/BackToTop";

function App() {
  const spotlightRef = useRef(null);

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
      <ReactLenis root>
        <BrowserRouter>
          <div className="noise-overlay" />
          <div ref={spotlightRef} className="spotlight" />
          <CustomCursor />
          
          <div className='relative z-0 bg-[#040812] transition-colors duration-500'>
            <Navbar />
            <Hero />
            <TechMarquee />
            
            <main className="relative z-10">
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Contact />
            </main>
            
            <BackToTop />
          </div>
        </BrowserRouter>
      </ReactLenis>
    </ThemeProvider>
  );
}

export default App;
