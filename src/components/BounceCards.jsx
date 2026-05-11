import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
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
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

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
      // In mobile, we follow activeIndex if no hover
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        pushSiblings(activeIndex);
      } else {
        resetSiblings();
      }
    }
  }, [focusedIdx, activeIndex]);

  const pushSiblings = (hoveredIdx) => {
    if (!containerRef.current) return;
    const q = gsap.utils.selector(containerRef);

    projects.forEach((_, i) => {
      const target = q(`.card-${i}`);
      gsap.killTweensOf(target);
      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        // Extract translateX to keep it in place but remove rotation for focus
        const translateXMatch = baseTransform.match(/translateX\(([-0-9.]+)px\)/);
        const translateX = translateXMatch ? translateXMatch[0] : "translateX(0px)";
        
        gsap.to(target, {
          transform: `translate(-50%, -60%) ${translateX} scale(1)`,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.6,
          ease: "expo.out",
          zIndex: 100,
        });
      } else {
        const offsetX = i < hoveredIdx ? -80 : 80;
        const pushedTransform = baseTransform.replace(/translateX\(([-0-9.]+)px\)/, (match, p1) => {
          return `translateX(${parseFloat(p1) + offsetX}px)`;
        });
        gsap.to(target, {
          transform: `translate(-50%, -50%) ${pushedTransform} scale(0.95)`,
          filter: "blur(12px)",
          opacity: 0.15,
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

  return (
    <div
      ref={containerRef}
      className={`projects-container ${className}`}
      style={{ width: "100%", height: containerHeight }}
    >
      <div className="project-bg-glow" />

      {/* Navigation Arrows */}
      <div className="navigation-controls">
        <button className="nav-arrow prev" onClick={handlePrev} aria-label="Previous Project">
          <ChevronLeft size={32} />
        </button>
        <button className="nav-arrow next" onClick={handleNext} aria-label="Next Project">
          <ChevronRight size={32} />
        </button>
      </div>

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

    </div>
  );
}