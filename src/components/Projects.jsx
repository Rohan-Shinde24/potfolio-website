import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, ChevronRight, ChevronLeft } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";
import { projects } from "../constants";
import { BounceCards, Button } from "./index";

const Projects = () => {
  const transformStyles = [
    "rotate(-12deg) translate(-320px)", /* Even wider spread */
    "rotate(0deg)",
    "rotate(12deg) translate(320px)"
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col mb-10"> {/* Reduced from mb-20 */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[var(--color-primary)] font-mono text-xs font-bold tracking-[0.3em] uppercase mb-4"
        >
          02 / Projects
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title-lg text-[var(--color-text)]"
        >
          Selected Works & <br />
          <span className="text-[var(--color-text-muted)]">Digital Creations.</span>
        </motion.h2>
      </div>

      <div className="relative w-full h-[850px] flex items-center justify-center -mt-10"> {/* Negative margin to pull cards up */}
        <BounceCards
          projects={projects}
          containerWidth={window.innerWidth < 768 ? 360 : 1400} /* Wider container */
          containerHeight={800}
          animationDelay={0.5}
          animationStagger={0.1}
          easeType="elastic.out(1, 0.8)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 flex justify-center"
      >
        <Button
          size="lg"
          variant="primary"
          icon={Github}
          onClick={() => window.open("https://github.com/Rohan-Shinde24", "_blank")}
        >
          Explore All Repositories
        </Button>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");

