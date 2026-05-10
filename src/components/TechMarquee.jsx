import React from "react";
import { techRow1, techRow2, techRow3 } from "../constants";

const MarqueeRow = ({ items, direction = "left", speed = 40 }) => {
  const doubled = [...items, ...items, ...items, ...items];
  const animClass = direction === "right" ? "marquee-row-right" : "marquee-row-left";

  return (
    <div
      className="flex overflow-hidden relative"
      style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
    >
      <div
        className={`flex gap-4 shrink-0 ${animClass}`}
        style={{ "--speed": `${speed}s` }}
      >
        {doubled.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 px-6 py-3 border border-[var(--color-border)] rounded-full bg-[var(--color-bg)] transition-standard hover:border-[var(--color-primary)] shrink-0">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-5 h-5 object-contain grayscale"
            />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)]">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TechMarquee = () => {
  return (
    <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="flex flex-col gap-6">
        <MarqueeRow items={techRow1} direction="left"  speed={60} />
        <MarqueeRow items={techRow2} direction="right" speed={50} />
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .marquee-row-left {
          animation: marquee-left var(--speed, 40s) linear infinite;
        }
        .marquee-row-right {
          animation: marquee-right var(--speed, 40s) linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;

