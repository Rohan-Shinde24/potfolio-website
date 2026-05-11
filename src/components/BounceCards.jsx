import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowRight, Github } from "lucide-react";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  projects = [],
  containerWidth = "100%",
  containerHeight = 750,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(-8deg) translateX(-420px)",
    "rotate(0deg) translateX(0px)",
    "rotate(8deg) translateX(420px)",
  ],
}) {
  const containerRef = useRef(null);
  const [focusedIdx, setFocusedIdx] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.fromTo(
        ".card",
        { scale: 0.8, opacity: 0, y: 150 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: animationStagger,
          ease: "expo.out",
          delay: animationDelay,
          duration: 1.5,
        }
      );

      // Floating animation
      gsap.to(".card", {
        y: "+=15",
        duration: 4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { amount: 1.5, from: "random" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animationDelay, animationStagger]);

  // Handle focusedIdx changes for spread logic
  useEffect(() => {
    if (focusedIdx !== null) {
      pushSiblings(focusedIdx);
    } else {
      resetSiblings();
    }
  }, [focusedIdx]);

  const pushSiblings = (hoveredIdx) => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    projects.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        gsap.to(target, {
          transform: `translate(-50%, -60%) rotate(0deg) scale(1.05)`,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          zIndex: 100,
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = baseTransform.replace(/translateX\(([-0-9.]+)px\)/, (match, p1) => {
          return `translateX(${parseFloat(p1) + offsetX}px)`;
        });
        gsap.to(target, {
          transform: `translate(-50%, -50%) ${pushedTransform} scale(0.9)`,
          filter: "blur(8px)",
          opacity: 0.2,
          duration: 0.6,
          ease: "expo.out",
          zIndex: i,
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    projects.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || "none";
      gsap.to(target, {
        transform: `translate(-50%, -50%) ${baseTransform}`,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.6,
        ease: "expo.out",
        zIndex: i,
      });
    });
  };

  const handleMouseMove = (e, idx) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const getDetailPosition = (idx) => {
    return idx < Math.floor(projects.length / 2) ? "right" : "left";
  };

  return (
    <div
      ref={containerRef}
      className={`projects-container ${className}`}
      style={{ width: "100%", height: containerHeight }}
    >
      <div className="project-bg-glow" />

      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`card premium-card card-${idx} group`}
          onMouseMove={(e) => handleMouseMove(e, idx)}
          onMouseEnter={() => setFocusedIdx(idx)}
          onMouseLeave={() => setFocusedIdx(null)}
          onClick={() => window.open(project.live_link, "_blank")}
        >
          {/* Card Header: Image */}
          <div className="card-image-wrapper">
            <img src={project.image} alt={project.name} className="card-image" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-transparent to-transparent opacity-60" />
            
            {/* Github Icon Overlay */}
            <a 
              href={project.github_link}
              target="_blank"
              rel="noreferrer"
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={18} />
            </a>
          </div>

          {/* Card Body: Info */}
          <div className="card-info">
            <span className="card-tag">Project {idx + 1}</span>
            <h3 className="card-title">{project.name}</h3>
            <p className="card-description">
              {project.description}
            </p>

            <div className="flex gap-3 flex-wrap mt-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag.name}
                  className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] font-bold text-white/40 group-hover:text-white/80 transition-colors"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer: Action */}
          <a
            href={project.live_link}
            target="_blank"
            rel="noreferrer"
            className="premium-btn"
            onClick={(e) => e.stopPropagation()}
          >
            Explore Case Study
            <ArrowRight size={16} />
          </a>
        </div>
      ))}

      {/* Cinematic Detail Overlay (Side) */}
      <AnimatePresence>
        {focusedIdx !== null && (
          <motion.div
            initial={{ opacity: 0, x: getDetailPosition(focusedIdx) === "right" ? 100 : -100, filter: "blur(20px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, x: getDetailPosition(focusedIdx) === "right" ? 50 : -50, filter: "blur(20px)" }}
            className={`hidden xl:flex flex-col gap-8 absolute top-1/2 -translate-y-1/2 w-[400px] p-12 glass-panel rounded-[48px] z-[200] ${
              getDetailPosition(focusedIdx) === "right" ? "left-[calc(50%+240px)]" : "right-[calc(50%+240px)]"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-2 h-12 bg-primary rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)]" />
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-1">Architecture</h4>
                <span className="text-sm font-bold text-white">Project Insight</span>
              </div>
            </div>

            <p className="text-sm text-white/50 leading-relaxed font-medium">
              {projects[focusedIdx].description}
            </p>

            <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />

            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-widest font-black text-white/30">Technology Stack</span>
              <div className="flex gap-3 flex-wrap">
                {projects[focusedIdx].tags?.map(tag => (
                  <div key={tag.name} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                     <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tag.color }} />
                     <span className="text-xs font-bold text-white/70">{tag.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}