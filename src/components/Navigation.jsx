import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Menu } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "WORK", href: "#work" },
    { name: "ABOUT", href: "#about" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "SKILLS", href: "#skills" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className="fixed top-0 left-0 w-full px-6 py-6 md:px-12 z-100 flex justify-between items-center mix-blend-difference"
      >
        <div className="font-sans font-bold text-sm tracking-[0.2em] uppercase text-white">
          ROHAN SHINDE
        </div>
        
        <div className="hidden md:flex items-center gap-6 font-sans text-xs tracking-widest font-semibold text-white/70">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-3 py-1.5 transition-all duration-300 hover:bg-white hover:text-black rounded-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Indicator */}
        <div 
          className="md:hidden flex items-center justify-center cursor-pointer text-white"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-200 bg-[#050505] flex flex-col items-center justify-center"
          >
            <div 
              className="absolute top-6 right-6 text-white cursor-pointer p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </div>

            <div className="flex flex-col items-center gap-8 font-sans text-2xl tracking-widest font-bold text-white">
              {links.map((link) => (
                <motion.a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-white/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
