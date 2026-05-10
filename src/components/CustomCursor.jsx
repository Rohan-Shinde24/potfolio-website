import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const secondaryCursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  
  const secondaryX = useSpring(0, { stiffness: 250, damping: 20, mass: 0.8 });
  const secondaryY = useSpring(0, { stiffness: 250, damping: 20, mass: 0.8 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      secondaryX.set(e.clientX);
      secondaryY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, secondaryX, secondaryY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Secondary Circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/50 rounded-full"
        animate={{
          scale: isHovering ? 2.5 : isMouseDown ? 0.8 : 1,
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
          borderColor: isHovering ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.5)",
        }}
        style={{
          x: secondaryX,
          y: secondaryY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      
      {/* Outer Glow */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className="fixed top-0 left-0 w-16 h-16 bg-violet-500/20 blur-xl rounded-full"
          style={{
            x: secondaryX,
            y: secondaryY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
