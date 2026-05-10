import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn, fadeIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bento-card p-8 bg-white'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-gray-50 py-4 px-6 placeholder:text-gray-400 text-gray-900 rounded-xl border border-gray-200 font-medium outline-none focus:border-[#915EFF] transition-all shadow-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-gray-50 py-4 px-6 placeholder:text-gray-400 text-gray-900 rounded-xl border border-gray-200 font-medium outline-none focus:border-[#915EFF] transition-all shadow-sm'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-gray-900 font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-gray-50 py-4 px-6 placeholder:text-gray-400 text-gray-900 rounded-xl border border-gray-200 font-medium outline-none focus:border-[#915EFF] transition-all shadow-sm'
            />
          </label>

          <button
            type='submit'
            className='hidden xl:block bg-[#915EFF] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-purple-500/20 hover:bg-[#804dee] transition-all'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 flex justify-center items-center'
      >
        <div className="w-full h-full min-h-[400px] bento-card flex flex-col justify-center items-center p-10 border border-purple-100 shadow-xl relative overflow-hidden group bg-white">
           {/* Pulsing background effect */}
           <div className="absolute inset-0 bg-purple-50/50 animate-pulse-glow"></div>
           
           <h4 className="text-gray-900 text-[42px] font-black text-center mb-6 z-10">Let's Connect!</h4>
           <p className="text-gray-600 text-center mb-10 max-w-[400px] z-10 text-[18px]">Feel free to reach out for collaborations, freelance projects, or just a friendly chat about technology.</p>
           
           <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))}
            className='bg-[#915EFF] py-5 px-12 rounded-2xl outline-none text-white font-black text-[20px] shadow-xl shadow-purple-500/30 hover:shadow-2xl transition-all z-10 uppercase tracking-widest'
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

           <div className="flex gap-8 mt-12 z-10">
              <motion.div whileHover={{ y: -5, scale: 1.1 }} className="w-14 h-14 bento-card bg-white flex justify-center items-center cursor-pointer hover:border-[#915EFF] transition-all shadow-sm">
                <span className="text-gray-900 font-bold text-[20px]">In</span>
              </motion.div>
              <motion.div whileHover={{ y: -5, scale: 1.1 }} className="w-14 h-14 bento-card bg-white flex justify-center items-center cursor-pointer hover:border-[#00cea8] transition-all shadow-sm">
                <span className="text-gray-900 font-bold text-[20px]">Git</span>
              </motion.div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
