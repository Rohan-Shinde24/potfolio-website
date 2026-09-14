import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const ContactSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-between border-t border-white/5 pt-32">
      
      {/* Main Contact Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-8 block">
            06 — CONTACT
          </span>
          
          <h2 className="font-space font-black tracking-tighter text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-white mb-8">
            LET'S BUILD <br /> SOMETHING.
          </h2>
          
          <p className="font-serif-elegant italic font-light text-xl sm:text-2xl md:text-4xl text-white/70 mb-16 max-w-2xl mx-auto">
            Have an idea, opportunity, or interesting problem?
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <span className="font-sans text-sm font-bold tracking-[0.2em] uppercase text-white">GET IN TOUCH →</span>
            
            <div className="flex items-center gap-6">
              <a href="mailto:rohan42455@gmail.com" className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300">
                <Mail size={24} strokeWidth={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/rohan-shinde024" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300">
                <Linkedin size={24} strokeWidth={1.5} />
              </a>
              <a href="https://github.com/Rohan-Shinde24" target="_blank" rel="noreferrer" className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300">
                <Github size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-32 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center md:text-left">
          <span className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-white">ROHAN SHINDE</span>
          <span className="font-sans text-xs text-white/40 hidden md:block">|</span>
          <span className="font-space text-xs text-white/60">Software Developer · AI & ML</span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-sans text-xs text-white/40">© 2026 Rohan Shinde</span>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-white/70 transition-colors"
          >
            BACK TO TOP 
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>

    </section>
  );
};

export default ContactSection;
