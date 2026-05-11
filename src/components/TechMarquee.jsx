import React from "react";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const TechMarquee = () => {
  return (
    <section className="py-24 border-y border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden">

      {/* Heading */}
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

      {/* 3D Perspective Viewport */}
      <div
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 40px 100px",
          overflow: "hidden",
        }}
      >
        {/* THE ONE BIG TILTED PANEL — all skills inside */}
        <div className="skills-panel">
          {technologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="skill-chip group"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Icon floats above the panel */}
              <div className="chip-icon">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-7 h-7 object-contain"
                />
              </div>
              <span className="chip-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ── The big tilted panel ── */
        @keyframes panel-float {
          0%   { transform: rotateX(52deg) rotateZ(-8deg) translateY(0px); }
          30%  { transform: rotateX(52deg) rotateZ(-8deg) translateY(-22px); }
          60%  { transform: rotateX(52deg) rotateZ(-8deg) translateY(8px); }
          100% { transform: rotateX(52deg) rotateZ(-8deg) translateY(0px); }
        }

        .skills-panel {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          max-width: 1000px;
          padding: 40px;

          background: linear-gradient(
            135deg,
            color-mix(in srgb, var(--color-primary) 5%, var(--color-bg)) 0%,
            var(--color-bg) 100%
          );
        
          border-radius: 28px;

          /* Depth — thick bottom edge */
        

          transform-style: preserve-3d;
 
          /* Start tilted */
          transform: rotateX(52deg) rotateZ(-8deg);
          animation: panel-float 6s ease-in-out infinite;
          will-change: transform;
          cursor: default;

          transition: box-shadow 0.4s ease;
        }

    

        /* ── Individual skill chip ── */
        @keyframes chip-float {
          0%   { transform: translateZ(20px); }
          50%  { transform: translateZ(38px); }
          100% { transform: translateZ(20px); }
        }

        .skill-chip {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          width: 90px;

          animation: chip-float 3s ease-in-out infinite;
          will-change: transform;
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .skill-chip:hover {
          animation-play-state: paused;
          transform: translateZ(55px) scale(1.1);
        }

        /* Icon circle floating above panel surface */
        .chip-icon {
          width: 56px;
          height: 56px;
          background: var(--color-bg);
          border: 2px solid var(--color-border);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 6px 16px rgba(0,0,0,0.1),
            0 2px 4px rgba(0,0,0,0.06);
          transition: border-color 0.3s, box-shadow 0.3s;
          will-change: transform;
        }

        .skill-chip:hover .chip-icon {
          border-color: var(--color-primary);
          box-shadow:
            0 12px 28px rgba(0,0,0,0.14),
            0 0 0 1px var(--color-primary);
        }

        /* Label on the panel surface */
        .chip-label {
          font-size: 8px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: var(--color-text-muted);
          text-align: center;
          line-height: 1.3;
          transition: color 0.3s;
        }

        .skill-chip:hover .chip-label {
          color: var(--color-primary);
        }
        /* ── Responsive ── */
        @media (max-width: 768px) {
          @keyframes panel-float {
            0%   { transform: rotateX(40deg) rotateZ(-5deg) translateY(0px); }
            30%  { transform: rotateX(40deg) rotateZ(-5deg) translateY(-16px); }
            60%  { transform: rotateX(40deg) rotateZ(-5deg) translateY(6px); }
            100% { transform: rotateX(40deg) rotateZ(-5deg) translateY(0px); }
          }
          .skills-panel {
            max-width: 92vw;
            padding: 20px 16px;
            gap: 12px;
            transform: rotateX(40deg) rotateZ(-5deg);
            border-radius: 20px;
          }
          .skill-chip { width: 68px; }
          .chip-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .chip-icon img { width: 22px; height: 22px; }
          .chip-label { font-size: 7px; letter-spacing: 0.1em; }
        }

        @media (max-width: 480px) {
          .skills-panel {
            max-width: 96vw;
            padding: 16px 12px;
            gap: 10px;
          }
          .skill-chip { width: 58px; }
          .chip-icon { width: 34px; height: 34px; }
          .chip-label { display: none; }
        }
      `}</style>
    </section>
  );
};

export default TechMarquee;
