import React from "react";
import { technologies } from "../constants";
import GridMotion from "./GridMotion";
import { motion } from "framer-motion";

const TechMarquee = () => {
  // Prepare items for GridMotion (needs 28 items)
  const items = React.useMemo(() => {
    const techItems = technologies.map(tech => (
      <div key={tech.name} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-[var(--color-bg)] border-[2px] border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group shadow-sm hover:shadow-primary/20">
        <div className="w-14 h-14 p-2 bg-[var(--color-border)] rounded-xl group-hover:scale-110 transition-transform flex items-center justify-center border border-[var(--color-border)]">
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{tech.name}</span>
      </div>
    ));

    const padded = [...techItems];
    while (padded.length < 28) {
      padded.push(...techItems.slice(0, 28 - padded.length));
    }
    return padded.slice(0, 28);
  }, []);

  return (
    <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden">
      <div className="max-container relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <span className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4">
            05 / Capabilities
          </span>
          <h2 className="title-lg text-[var(--color-text)]">
            Technical <span className="text-[var(--color-text-muted)]">Expertise.</span>
          </h2>
        </motion.div>
      </div>

      <div className="h-[60vh] w-full relative">
        {/* Top/Bottom Fade */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[var(--color-bg)] via-transparent to-[var(--color-bg)] opacity-60" />
        {/* Left/Right Fade - The "Blur from end" effect */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[var(--color-bg)] via-transparent to-[var(--color-bg)] opacity-80" />
        
        <GridMotion items={items} gradientColor="var(--color-primary-semi)" />
      </div>
    </section>
  );
};

export default TechMarquee;

