// Projects.jsx

import { motion } from "framer-motion";
import { Github } from "lucide-react";

import SectionWrapper from "../hoc/SectionWrapper";

import { projects } from "../constants";

import BounceCards from "./BounceCards";
import Button from "./Button";

const Projects = () => {
  const transformStyles =
    window.innerWidth < 768
      ? [
          "rotate(-6deg) translateX(-70px)",
          "rotate(0deg) translateX(0px)",
          "rotate(6deg) translateX(70px)",
        ]
      : [
          "rotate(-8deg) translateX(-120px)",
          "rotate(0deg) translateX(0px)",
          "rotate(8deg) translateX(120px)",
        ];

  return (
    <div className="w-full">
      {/* Heading */}

      <div className="flex flex-col mb-10">
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

          <span className="text-[var(--color-text-muted)]">
            Digital Creations.
          </span>
        </motion.h2>
      </div>

      {/* Cards */}

      <div className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden mb-20 -mt-16">
        <BounceCards
          projects={projects}
          containerWidth="100%"
          containerHeight={650}
          animationDelay={0.4}
          animationStagger={0.1}
          easeType="elastic.out(1, 0.75)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>

      {/* Button */}

      <div className="mt-10 flex justify-center pb-20">
        <Button
          size="lg"
          variant="primary"
          icon={Github}
          onClick={() =>
            window.open(
              "https://github.com/Rohan-Shinde24",
              "_blank"
            )
          }
        >
          Explore All Repositories
        </Button>
      </div>
    </div>
  );
};

export default SectionWrapper(
  Projects,
  "projects"
);