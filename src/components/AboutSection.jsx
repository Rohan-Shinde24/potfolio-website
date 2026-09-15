import { useRef, useState, useCallback } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useSpring,
} from "motion/react";

const words = [
  "I",
  "enjoy",
  "turning",
  "complex",
  "ideas",
  "into",
  "simple,",
  "useful",
  "digital",
  "experiences.",
];

const GravityWord = ({ word, falling }) => {
  const x = useSpring(0, {
    stiffness: 38,
    damping: 20,
    mass: 1.6,
  });

  const y = useSpring(0, {
    stiffness: 42,
    damping: 20,
    mass: 1.8,
  });

  const rotate = useSpring(0, {
    stiffness: 30,
    damping: 18,
    mass: 1.6,
  });

  const scale = useSpring(1, {
    stiffness: 45,
    damping: 20,
    mass: 1.4,
  });

  const fallDistance =
    typeof window !== "undefined"
      ? window.innerHeight * 0.72
      : 600;

  if (falling) {
    const randomX = (Math.random() - 0.5) * 240;
    const randomRotate = (Math.random() - 0.5) * 75;
    const randomScale = 0.82 + Math.random() * 0.18;

    x.set(randomX);
    y.set(fallDistance);
    rotate.set(randomRotate);
    scale.set(randomScale);
  } else {
    x.set(0);
    y.set(0);
    rotate.set(0);
    scale.set(1);
  }

  return (
    <motion.span
      style={{
        display: "inline-block",
        x,
        y,
        rotate,
        scale,
        transformOrigin: "center center",
      }}
      className="mr-[0.25em]"
    >
      {word}
    </motion.span>
  );
};

const AboutSection = () => {
  const [glitch, setGlitch] = useState("");
  const [falling, setFalling] = useState(false);

  const lastScrollRef = useRef(0);
  const glitchTimerRef = useRef(null);

  const { scrollY } = useScroll();

  const triggerGlitch = useCallback(() => {
    const value =
      Math.random() > 0.5
        ? "is-glitching"
        : "is-glitching-alt";

    setGlitch(value);

    clearTimeout(glitchTimerRef.current);

    glitchTimerRef.current = setTimeout(() => {
      setGlitch("");
    }, 500);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const delta = Math.abs(
      current - lastScrollRef.current
    );

    lastScrollRef.current = current;

    if (delta > 2 && Math.random() < 0.15) {
      triggerGlitch();
    }
  });

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-[#050505] py-32 px-6 md:px-12 flex flex-col justify-center border-t border-white/5 overflow-hidden"
    >
      {/* Background grid */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 100%",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.01, 0.035, 0.01],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-[180px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl w-full mx-auto">

        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-space text-xs tracking-[0.3em] text-white/40">
            02
          </span>

          <span className="w-10 h-px bg-white/20" />

          <span className="font-space text-xs tracking-[0.3em] text-white/40 uppercase">
            About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left side */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-4"
          >
            <p className="font-space text-xs uppercase tracking-[0.2em] text-white/30 mb-6">
              Software Developer
            </p>

            <h2 className="font-serif-elegant italic font-light text-5xl md:text-6xl lg:text-7xl text-white leading-[0.95]">
              Building
              <br />
              with
              <br />
              purpose.
            </h2>

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="mt-10"
            >
              <span className="font-space text-[9px] uppercase tracking-[0.3em] text-white/20">
                Developer · Creator · Problem Solver
              </span>
            </motion.div>
          </motion.div>

          {/* Right side */}
          <div className="lg:col-span-8 lg:pt-4">

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-16"
            >
              <p className="font-space text-base md:text-lg leading-[1.8] text-white/50 max-w-2xl">
                I’m a software developer focused on creating
                thoughtful digital products, scalable applications,
                and intelligent experiences. I enjoy working across
                the stack and turning complex technical ideas into
                products that feel simple and intuitive.
              </p>
            </motion.div>

            {/* Interactive quote area */}
            <div
              className="relative min-h-[520px] md:min-h-[580px]"
              onMouseEnter={() => setFalling(true)}
              onMouseLeave={() => setFalling(false)}
            >
              {/* Quote */}
              <div className="relative z-20">
                <h3
                  className={`
                    ${glitch}
                    font-serif-elegant
                    italic
                    font-light
                    text-3xl
                    md:text-5xl
                    lg:text-[4rem]
                    leading-[1.08]
                    text-white
                    max-w-4xl
                    select-none
                  `}
                >
                  {words.map((word, index) => (
                    <GravityWord
                      key={`${word}-${index}`}
                      word={word}
                      falling={falling}
                    />
                  ))}
                </h3>
              </div>

              {/* Ground */}
              <div className="absolute bottom-20 left-0 w-full max-w-4xl">
                <motion.div
                  animate={{
                    opacity: falling ? 0.35 : 0,
                    scaleX: falling ? 1 : 0.3,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="h-5 w-full bg-black blur-2xl"
                />
              </div>

              {/* Interaction hint */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="absolute bottom-0 left-0 flex items-center gap-3"
              >
                <motion.span
                  animate={{
                    x: [0, 6, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-7 h-px bg-white/30"
                />

                <span className="font-space text-[9px] uppercase tracking-[0.3em] text-white/25">
                  Hover to let it fall
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutSection;