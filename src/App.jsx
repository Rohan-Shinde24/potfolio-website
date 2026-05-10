import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Skills, Projects, CustomCursor, TechMarquee } from "./components";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <div className='relative z-0 bg-white'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <TechMarquee />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
