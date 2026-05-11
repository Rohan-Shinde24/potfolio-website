// BounceCards.jsx

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./BounceCards.css";

export default function BounceCards({
  className = "",
  projects = [],
  containerWidth = "100%",
  containerHeight = 650,
  animationDelay = 0.5,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.8)",
  transformStyles = [
    "rotate(-8deg) translateX(-120px)",
    "rotate(0deg) translateX(0px)",
    "rotate(8deg) translateX(120px)",
  ],
  enableHover = true,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry animation
      gsap.fromTo(
        ".card",
        {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          stagger: animationStagger,
          ease: easeType,
          delay: animationDelay,
          duration: 1,
        }
      );

      // Floating animation
      gsap.to(".card", {
        y: "+=12",
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 1,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [animationDelay, animationStagger, easeType]);

  // Remove rotation when hover
  const getNoRotationTransform = (transformStr) => {
    return transformStr.replace(/rotate\([\s\S]*?\)/, "rotate(0deg)");
  };

  // Push sibling cards
  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translateX\(([-0-9.]+)px\)/;

    const match = baseTransform.match(translateRegex);

    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;

      return baseTransform.replace(
        translateRegex,
        `translateX(${newX}px)`
      );
    }

    return `${baseTransform} translateX(${offsetX}px)`;
  };

  const pushSiblings = (hoveredIdx) => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    projects.forEach((_, i) => {
      const target = q(`.card-${i}`);

      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || "none";

      if (i === hoveredIdx) {
        const noRotationTransform = getNoRotationTransform(baseTransform);

        gsap.to(target, {
          transform: `translate(-50%, calc(-50% - 60px)) ${noRotationTransform} scale(1.08)`,
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          zIndex: 100,
        });
      } else {
        const offsetX = i < hoveredIdx ? -80 : 80;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        gsap.to(target, {
          transform: `translate(-50%, calc(-50% - 60px)) ${pushedTransform} scale(0.92)`,
          filter: "blur(4px)",
          opacity: 0.45,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover || !containerRef.current) return;

    const q = gsap.utils.selector(containerRef);

    projects.forEach((_, i) => {
      const target = q(`.card-${i}`);

      gsap.killTweensOf(target);

      const baseTransform = transformStyles[i] || "none";

      gsap.to(target, {
        transform: `translate(-50%, calc(-50% - 60px)) ${baseTransform}`,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
        zIndex: i,
      });
    });
  };

  // Helper: prepend centering to a transform string (with upward shift)
  const centered = (t) => `translate(-50%, calc(-50% - 60px)) ${t}`;

  return (
    <div
      ref={containerRef}
      className={`bounceCardsContainer ${className}`}
      style={{
        width: containerWidth,
        height: containerHeight,
      }}
    >
      {projects.map((project, idx) => (
        <div
          key={idx}
          className={`card card-${idx}`}
          style={{
            transform: centered(transformStyles[idx] || "none"),
            zIndex: idx,
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
        >
          <img
            className="image"
            src={project.image}
            alt={project.name}
          />

          <div className="card-content">
            <div>
              <h3 className="card-title">{project.name}</h3>

              <p className="card-desc">
                {project.description}
              </p>
            </div>

            <div className="flex gap-2 flex-wrap">
              {project.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag.name}
                  className="text-[10px] uppercase tracking-wide px-2 py-1 rounded-full bg-[var(--color-border)] text-[var(--color-text-muted)]"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}