import React from "react";
import { techRow1, techRow2, techRow3 } from "../constants";

const MarqueeRow = ({ items, direction = "left", speed = 35 }) => {
  // Triple-duplicate for seamless scroll
  const doubled = [...items, ...items, ...items];
  const animClass = direction === "right" ? "marquee-row-right" : "marquee-row-left";

  return (
    <div
      className="flex overflow-hidden relative group"
      style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}
    >
      <div
        className={`flex gap-4 shrink-0 ${animClass} group-hover:[animation-play-state:paused]`}
        style={{ "--speed": `${speed}s` }}
      >
        {doubled.map((tech, i) => (
          <TechChip key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const TechChip = ({ tech }) => (
  <div className="flex items-center gap-4 px-6 py-4 glass-morphism border border-white/5 rounded-2xl hover:border-[#7C3AED]/50 hover:bg-white/10 transition-all duration-500 group/chip cursor-default shrink-0 shadow-xl shadow-black/20">
    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover/chip:bg-[#7C3AED]/20 transition-all border border-white/10 p-2 shadow-inner">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-full h-full object-contain filter brightness-90 group-hover/chip:brightness-125 transition-all duration-500 group-hover/chip:scale-110"
        onError={(e) => { e.target.style.display = "none"; }}
      />
    </div>
    <div className="flex flex-col">
      <span className="text-white/70 font-space font-bold text-xs uppercase tracking-[0.2em] group-hover/chip:text-white transition-colors">
        {tech.name}
      </span>
      <div className="w-0 group-hover/chip:w-full h-[1px] bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] transition-all duration-500 mt-1" />
    </div>
  </div>
);

const TechMarquee = () => {
  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5 bg-[#040812]">
      {/* Background Grid for this section */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      {/* Section header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <div className="inline-block px-4 py-1.5 glass-morphism border border-[#06B6D4]/20 rounded-full mb-4">
          <p className="text-[#06B6D4] font-mono text-[10px] uppercase tracking-[0.5em]">Engineering Stack</p>
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white font-space mb-4">
          Technical <span className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] bg-clip-text text-transparent underline decoration-[#7C3AED]/30 decoration-wavy underline-offset-8">Arsenal</span>
        </h2>
        <p className="text-white/40 text-sm max-w-lg mx-auto font-light leading-relaxed">
          Crafting robust solutions with a modern, high-performance tech stack optimized for scalability and user experience.
        </p>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#7C3AED]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#06B6D4]/5 blur-[120px]" />
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <MarqueeRow items={techRow1} direction="left"  speed={40} />
        <MarqueeRow items={techRow2} direction="right" speed={35} />
        <MarqueeRow items={techRow3} direction="left"  speed={45} />
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .marquee-row-left {
          animation: marquee-left var(--speed, 30s) linear infinite;
        }
        .marquee-row-right {
          animation: marquee-right var(--speed, 30s) linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
