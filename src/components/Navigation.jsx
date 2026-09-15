import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { X, Menu, ArrowUpRight } from "lucide-react";
import signature from "../assets/signature.png";

const links = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "SKILLS", href: "#skills" },
  { name: "CONTACT", href: "#contact" },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;

    setIsScrolled(current > 30);

    if (current <= 20) {
      setIsVisible(true);
      return;
    }

    if (current < previous) {
      setIsVisible(true);
    }

    if (current > previous + 4) {
      setIsVisible(false);
    }
  });

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          top-0
          left-0
          z-[100]
          w-full
          px-4
          sm:px-6
          md:px-10
          lg:px-14
          pt-4
          md:pt-5
          pointer-events-none
        "
      >
        <motion.div
          animate={{
            backgroundColor: isScrolled
              ? "rgba(0,0,0,0.72)"
              : "rgba(0,0,0,0)",
            borderColor: isScrolled
              ? "rgba(255,255,255,0.09)"
              : "rgba(255,255,255,0)",
            backdropFilter: isScrolled ? "blur(18px)" : "blur(0px)",
          }}
          transition={{ duration: 0.35 }}
          className="
            relative
            mx-auto
            w-full
            max-w-[1500px]
            rounded-full
            border
            px-4
            md:px-6
            py-2
            md:py-2.5
            flex
            items-center
            justify-between
            pointer-events-auto
          "
        >
          <motion.a
            href="#"
            initial={{
              opacity: 0,
              x: -30,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              items-center
              h-12
              md:h-14
              lg:h-16
              w-32
              md:w-40
              lg:w-48
              shrink-0
            "
          >
            <motion.img
              src={signature}
              alt="Rohan Shinde"
              initial={{
                scale: 0.8,
                rotate: -10,
              }}
              animate={{
                scale: 1,
                rotate: -5,
              }}
              whileHover={{
                scale: 1.05,
                rotate: -2,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                left-[-12px]
                top-1/2
                -translate-y-1/2
                w-40
                md:w-48
                lg:w-56
                h-auto
                object-contain
                pointer-events-none
              "
            />
          </motion.a>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.55 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-full
                  px-3
                  lg:px-4
                  py-3
                "
              >
                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-1.5
                    font-sans
                    text-[9px]
                    lg:text-[10px]
                    font-semibold
                    tracking-[0.18em]
                    text-white/50
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {link.name}

                  {link.name === "CONTACT" && (
                    <ArrowUpRight
                      size={10}
                      strokeWidth={1.5}
                      className="
                        opacity-0
                        translate-x-[-4px]
                        translate-y-[4px]
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                        group-hover:translate-y-0
                      "
                    />
                  )}
                </span>

                <span
                  className="
                    absolute
                    left-3
                    right-3
                    lg:left-4
                    lg:right-4
                    bottom-1.5
                    h-px
                    origin-left
                    scale-x-0
                    bg-white
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />

                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-white/[0.04]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 15,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 1,
            }}
            className="
              hidden
              lg:flex
              items-center
              gap-2
              ml-3
              pl-4
              border-l
              border-white/10
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="
                absolute
                inline-flex
                h-full
                w-full
                rounded-full
                bg-white
                opacity-40
                animate-ping
              " />

              <span className="
                relative
                inline-flex
                h-1.5
                w-1.5
                rounded-full
                bg-white
              " />
            </span>

            <span className="
              font-space
              text-[8px]
              tracking-[0.2em]
              uppercase
              text-white/30
            ">
              Available
            </span>
          </motion.div>

          <motion.button
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.7,
            }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              w-11
              h-11
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-white/70
              transition-all
              duration-300
              hover:bg-white/[0.08]
              hover:text-white
            "
            aria-label="Open menu"
          >
            <Menu size={19} strokeWidth={1.5} />
          </motion.button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[200]
              bg-black
              overflow-hidden
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 1.1,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.05,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                pointer-events-none
              "
            >
              <span className="
                font-space
                font-black
                text-[38vw]
                leading-none
                tracking-[-0.12em]
                text-white/[0.025]
              ">
                MENU
              </span>
            </motion.div>

            <motion.button
              initial={{
                opacity: 0,
                rotate: -90,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
              }}
              transition={{
                duration: 0.5,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                absolute
                top-5
                right-5
                md:top-8
                md:right-8
                z-20
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-full
                border
                border-white/10
                text-white/70
                transition-all
                duration-300
                hover:bg-white/5
                hover:text-white
              "
              aria-label="Close menu"
            >
              <X size={21} strokeWidth={1.5} />
            </motion.button>

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                justify-center
                px-8
                md:px-16
              "
            >
              <motion.span
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  mb-8
                  font-space
                  text-[8px]
                  tracking-[0.3em]
                  uppercase
                  text-white/25
                "
              >
                Navigation
              </motion.span>

              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    initial={{
                      opacity: 0,
                      x: -50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: -30,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      group
                      relative
                      w-fit
                      py-3
                      text-left
                    "
                  >
                    <span className="
                      font-space
                      font-bold
                      text-[12vw]
                      sm:text-6xl
                      md:text-7xl
                      leading-none
                      tracking-[-0.07em]
                      text-white/55
                      transition-colors
                      duration-300
                      group-hover:text-white
                    ">
                      {link.name}
                    </span>

                    <span className="
                      absolute
                      left-0
                      bottom-2
                      h-px
                      w-0
                      bg-white
                      transition-all
                      duration-300
                      group-hover:w-full
                    " />
                  </motion.button>
                ))}
              </div>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.6,
                }}
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-white/10
                  pt-5
                "
              >
                <span className="
                  font-space
                  text-[8px]
                  tracking-[0.25em]
                  uppercase
                  text-white/25
                ">
                  Rohan Shinde
                </span>

                <span className="
                  font-space
                  text-[8px]
                  tracking-[0.25em]
                  uppercase
                  text-white/25
                ">
                  Available for work
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;