import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue
} from "motion/react";

import project1Image from "../assets/project1aipowerrecruit.png";
import project3Image from "../assets/project3.png";
import doomslangImage from "../assets/doomslang.png";
import coltaskImage from "../assets/coltask.png";

const projects = [
  {
    id: "01",
    title: "AI-PowerRecruit",
    category: "AI Recruitment Platform",
    image: project1Image,
    desc: "AI-powered recruitment and hiring platform. Features resume analysis, ATS scoring, AI matching, aptitude screening, and interview workflows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI"],
    link: "https://ai-power-recruit.vercel.app/"
  },
  {
    id: "02",
    title: "Fake News Detection",
    category: "Machine Learning System",
    image: project3Image,
    desc: "A machine learning application where users can paste news articles to verify authenticity, developed and trained in Google Colab.",
    stack: ["ML", "Python", "Streamlit", "Colab"],
    link: "https://242848.streamlit.app/"
  },
  {
    id: "03",
    title: "Coltask",
    category: "Workspace Collaboration",
    image: coltaskImage,
    desc: "The all-in-one workspace for high-velocity teams. Plan sprints, manage tasks, and chat in total privacy—without jumping between apps.",
    stack: ["React", "Node.js", "Collaboration", "Privacy"],
    link: "https://coltask.vercel.app/"
  },
  {
    id: "04",
    title: "Doomslang",
    category: "Programming Language",
    image: doomslangImage,
    desc: "An object-oriented programming language designed and developed entirely from scratch. Features custom syntax, parsing, and execution engine.",
    stack: ["Python", "Object-Oriented", "Compilers"],
    link: "https://doomslang.vercel.app/"
  }
];

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

const ProjectCard = ({
  project,
  index,
  progress,
  total
}) => {
  /*
   * Each card has a position:
   *
   *        card
   *          \
   *           \
   *            CENTER
   *           /
   *          /
   *       card
   *
   * The further away from center:
   * - the more it moves on X
   * - the further back it goes on Z
   * - the more it rotates
   */

  const cardPosition = useTransform(
    progress,
    [0, 1],
    [index, index - (total - 1)]
  );

  /*
   * Convert card position into degrees.
   *
   * Center = 0
   * Left   = negative
   * Right  = positive
   */
  const angle = useTransform(cardPosition, (value) => {
    const normalized = clamp(value / 1.5, -1, 1);
    return normalized * 62;
  });

  /*
   * Large radius creates a smooth cinematic curve.
   */
  const radius = 720;

  /*
   * X follows a circular arc.
   */
  const x = useTransform(angle, (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return Math.sin(radians) * radius;
  });

  /*
   * Z follows the same arc.
   *
   * Center:
   *      z = 0
   *
   * Sides:
   *      z becomes negative
   *
   * This creates the "back into Z-axis" effect
   * from your drawing.
   */
  const z = useTransform(angle, (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return (Math.cos(radians) - 1) * radius;
  });

  /*
   * Cards rotate along the curve.
   */
  const rotateY = useTransform(angle, (value) => {
    return -value * 0.72;
  });

  /*
   * Slight vertical movement makes the curve
   * feel more natural instead of perfectly flat.
   */
  const y = useTransform(angle, (degrees) => {
    const radians = (degrees * Math.PI) / 180;
    return Math.abs(Math.sin(radians)) * 30;
  });

  /*
   * Center card becomes the selected project.
   */
  const scale = useTransform(
    cardPosition,
    [-1.8, -1.2, -0.6, 0, 0.6, 1.2, 1.8],
    [0.72, 0.82, 0.92, 1, 0.92, 0.82, 0.72]
  );

  const opacity = useTransform(
    cardPosition,
    [-1.8, -1.4, -0.8, 0, 0.8, 1.4, 1.8],
    [0, 0.3, 0.72, 1, 0.72, 0.3, 0]
  );

  /*
   * Cards in front of the curve get higher Z-index.
   */
  const zIndex = useTransform(cardPosition, (value) => {
    return 100 - Math.round(Math.abs(value) * 20);
  });

  /*
   * Center card receives slightly stronger lighting.
   */
  const shadowOpacity = useTransform(
    cardPosition,
    [-1, -0.4, 0, 0.4, 1],
    [0.15, 0.3, 0.6, 0.3, 0.15]
  );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[86vw] max-w-107.5 md:max-w-140 lg:max-w-162.5 h-[62vh] lg:h-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-[#080808] p-5 md:p-7 lg:p-8 flex flex-col overflow-hidden"
      style={{
        x,
        y,
        z,
        rotateY,
        scale,
        opacity,
        zIndex,
        transformStyle: "preserve-3d",
        boxShadow: useTransform(
          shadowOpacity,
          (value) => `0 30px 100px rgba(0,0,0,${value})`
        )
      }}
    >
      {/* IMAGE */}
      <div className="relative w-full h-[34%] md:h-[42%] lg:h-[45%] rounded-xl overflow-hidden bg-black shrink-0">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.02 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-md">
          <span className="font-space text-[9px] tracking-[0.2em] text-white/70">
            {project.id}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 flex flex-col justify-between pt-5 md:pt-7">
        <div>
          <div className="flex items-center justify-between gap-4 mb-3">
            <span className="font-sans text-[9px] md:text-[10px] font-bold tracking-[0.18em] uppercase text-white/40">
              {project.category}
            </span>
          </div>

          <h3 className="font-serif-elegant font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight text-white mb-3">
            {project.title}
          </h3>

          <p className="font-sans text-xs md:text-sm lg:text-base text-white/50 font-light leading-relaxed max-w-2xl">
            {project.desc}
          </p>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mt-5">
          <div className="flex flex-wrap gap-2 max-w-full md:max-w-[70%]">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-space text-[8px] md:text-[9px] tracking-[0.12em] text-white/65 border border-white/10 rounded-full px-2.5 md:px-3 py-1 bg-white/3"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 self-start md:self-auto bg-white text-black font-sans text-[9px] font-bold tracking-[0.18em] px-5 py-3 rounded-full hover:bg-white/80 transition-all duration-300"
            >
              VIEW PROJECT
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /*
   * -------------------------------------------------------
   * SMOOTH SCROLL
   * -------------------------------------------------------
   *
   * Raw scroll can feel too mechanical.
   * useSpring gives the whole animation cinematic movement.
   */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 22,
    mass: 0.7
  });

  /*
   * -------------------------------------------------------
   * INTRO / SELECTED WORK
   * -------------------------------------------------------
   *
   * The page begins completely black.
   *
   * SELECTED WORK appears in the center.
   *
   * Then the camera slowly moves through the letters.
   */
  const titleScale = useTransform(
    smoothProgress,
    [0, 0.055, 0.11, 0.16, 0.20, 0.235],
    [1, 1, 1.15, 2.8, 12, 65]
  );

  const titleOpacity = useTransform(
    smoothProgress,
    [0, 0.16, 0.20, 0.235, 0.255],
    [1, 1, 1, 0.8, 0]
  );

  /*
   * Slight movement toward the camera.
   */
  const titleZ = useTransform(
    smoothProgress,
    [0.16, 0.20, 0.235],
    [0, 200, 1000]
  );

  /*
   * Make the text disappear before the cards become dominant.
   */
  const titleBlur = useTransform(
    smoothProgress,
    [0.18, 0.22, 0.25],
    [0, 0, 10]
  );

  /*
   * -------------------------------------------------------
   * PROJECT CAROUSEL
   * -------------------------------------------------------
   *
   * Starts after SELECTED WORK zoom.
   */
  const carouselProgress = useTransform(
    smoothProgress,
    [0.25, 0.88],
    [0, 1]
  );

  /*
   * Fade project cards in after the title zoom.
   */
  const carouselOpacity = useTransform(
    smoothProgress,
    [0.20, 0.27, 0.88, 0.98, 1],
    [0, 1, 1, 0.5, 0]
  );

  /*
   * Slight camera movement while going through projects.
   */
  const cameraZ = useTransform(
    smoothProgress,
    [0.25, 0.88],
    [0, 180]
  );

  const cameraY = useTransform(
    smoothProgress,
    [0.25, 0.88],
    [0, -10]
  );

  /*
   * Progress indicator.
   */
  const progressScale = useTransform(
    smoothProgress,
    [0.25, 0.88],
    [0, 1]
  );

  /*
   * Small "SELECTED WORK" label that stays subtle
   * while browsing projects.
   */
  const sectionLabelOpacity = useTransform(
    smoothProgress,
    [0.27, 0.35, 0.82, 0.9],
    [0, 0.45, 0.45, 0]
  );

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full h-[550vh] bg-black border-t border-white/4"
    >
      {/* ==================================================
          STICKY CAMERA
      ================================================== */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden bg-black"
        style={{
          perspective: "1800px"
        }}
      >
        {/* ==================================================
            PURE BLACK BACKGROUND
        ================================================== */}
        <div className="absolute inset-0 bg-black z-0" />

        {/* ==================================================
            SUBTLE CENTER GLOW
            Almost invisible — keeps black aesthetic.
        ================================================== */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-175 h-175 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
          style={{
            opacity: useTransform(
              smoothProgress,
              [0.25, 0.5, 0.88],
              [0, 0.08, 0]
            ),
            background:
              "radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 30%, transparent 70%)"
          }}
        />

        {/* ==================================================
            SELECTED WORK TITLE
        ================================================== */}
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none overflow-hidden bg-black"
          style={{
            opacity: titleOpacity
          }}
        >
          <motion.div
            className="flex items-center justify-center"
            style={{
              scale: titleScale,
              translateZ: titleZ,
              filter: useTransform(
                titleBlur,
                (value) => `blur(${value}px)`
              ),
              transformOrigin: "center center"
            }}
          >
            <h2
              className="
                whitespace-nowrap
                font-space
                font-bold
                text-white
                text-[12vw]
                md:text-[9vw]
                lg:text-[8vw]
                tracking-[-0.07em]
                leading-none
                select-none
              "
            >
              SELECTED WORK
            </h2>
          </motion.div>
        </motion.div>

        {/* ==================================================
            PROJECT WORLD
        ================================================== */}
        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
          style={{
            opacity: carouselOpacity,
            translateZ: cameraZ,
            y: cameraY,
            transformStyle: "preserve-3d"
          }}
        >
          {/* ==================================================
              CURVED PROJECT TRACK
          ================================================== */}
          <div
            className="
              relative
              w-full
              h-full
              flex
              items-center
              justify-center
            "
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                progress={carouselProgress}
                total={projects.length}
              />
            ))}
          </div>
        </motion.div>

        {/* ==================================================
            TOP SECTION LABEL
        ================================================== */}
        <motion.div
          className="absolute top-8 left-1/2 -translate-x-1/2 z-60 pointer-events-none"
          style={{
            opacity: sectionLabelOpacity
          }}
        >
          <span className="font-space text-[9px] tracking-[0.35em] uppercase text-white/40">
            SELECTED WORK
          </span>
        </motion.div>

        {/* ==================================================
            BOTTOM PROGRESS
        ================================================== */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-60 flex items-center gap-4"
          style={{
            opacity: carouselOpacity
          }}
        >
          <span className="font-space text-[8px] tracking-[0.2em] text-white/30">
            WORK
          </span>

          <div className="relative w-32 md:w-48 h-px bg-white/10 overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full w-full bg-white origin-left"
              style={{
                scaleX: progressScale
              }}
            />
          </div>

          <span className="font-space text-[8px] tracking-[0.2em] text-white/30">
            04
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;