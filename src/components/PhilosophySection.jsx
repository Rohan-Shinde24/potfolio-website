import { motion } from "motion/react";

const PhilosophySection = () => {
  return (
    <section className="relative w-full h-screen bg-[#050505] flex items-center justify-center overflow-hidden border-t border-white/5">
      
      {/* Subtle animated background texture */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif-elegant italic font-light text-3xl md:text-5xl lg:text-7xl leading-[1.2] text-white"
        >
          "Good software should feel simple, <br className="hidden md:block" />
          even when the system behind it is complex."
        </motion.h2>
      </div>

    </section>
  );
};

export default PhilosophySection;
