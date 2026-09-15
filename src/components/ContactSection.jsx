import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import signature from "../assets/signature.png";

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const message = form.message.value;

    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(message);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=rohan42455@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-[#050505] flex flex-col justify-between border-t border-white/5 pt-32"
    >
      {/* Main Contact Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full"
        >
          {/* Section Label */}
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-8 block">
            CONTACT
          </span>

          {/* Main Heading */}
          <h2 className="font-space font-black tracking-tighter text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] leading-[0.9] text-white mb-8">
            LET&apos;S BUILD <br />
            SOMETHING.
          </h2>

          {/* Subtitle */}
          <p className="font-serif-elegant italic font-light text-xl sm:text-2xl md:text-4xl text-white/70 mb-20 max-w-2xl mx-auto">
            Have an idea, opportunity, or interesting problem?
          </p>

          {/* Contact Area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 text-left items-start w-full mt-10">
            
            {/* Left Side */}
            <div className="flex flex-col max-w-md mx-auto md:mx-0">
              <h3 className="font-sans text-sm tracking-[0.2em] font-bold text-white mb-6 uppercase">
                Get In Touch
              </h3>

              <p className="text-white/60 mb-10 font-serif-elegant text-lg md:text-xl font-light leading-relaxed">
                Send me a message and I&apos;ll get back to you as soon as
                possible. You can also connect with me through my socials.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="mailto:rohan42455@gmail.com"
                  className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center group"
                  aria-label="Email"
                >
                  <Mail
                    size={20}
                    strokeWidth={1.5}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/in/rohan-shinde024"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={20}
                    strokeWidth={1.5}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>

                <a
                  href="https://github.com/Rohan-Shinde24"
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center group"
                  aria-label="GitHub"
                >
                  <Github
                    size={20}
                    strokeWidth={1.5}
                    className="group-hover:scale-110 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Message Only */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 w-full max-w-md mx-auto md:mx-0"
            >
              <div className="relative">
                <input
                  name="message"
                  required
                  placeholder="Tell me about your idea..."
                  rows="6"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/20
                    py-4
                    text-white
                    placeholder-white/30
                    focus:outline-none
                    focus:border-white
                    transition-colors
                    resize-none
                    font-sans
                    text-base
                  "
                />

                <span className="absolute right-0 bottom-4 font-space text-[9px] tracking-[0.15em] text-white/20 uppercase pointer-events-none">
                  Message
                </span>
              </div>

              <button
                type="submit"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  text-white
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                  font-sans
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  w-full
                  sm:w-auto
                  self-start
                "
              >
                SEND EMAIL
              </button>

              <p className="font-sans text-[9px] tracking-[0.12em] uppercase text-white/25">
                Opens Gmail to send your message
              </p>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 mt-32 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-center md:text-left">
          <img
            src={signature}
            alt="Rohan Shinde"
            className="w-20 md:w-28 object-contain -rotate-6 brightness-0 invert opacity-90"
          />

          <span className="font-sans text-xs text-white/40 hidden md:block">
            |
          </span>

          <span className="font-space text-xs text-white/60">
            Software Developer · AI & ML
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <span className="font-sans text-xs text-white/40">
            © 2026 Rohan Shinde
          </span>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-white hover:text-white/70 transition-colors"
          >
            BACK TO TOP
            <ArrowUp
              size={14}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;