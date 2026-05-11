import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon: Icon,
  disabled = false,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
  
  const variants = {
    primary: "bg-[var(--color-text)] text-[var(--color-bg)] hover:bg-[var(--color-primary)] hover:text-white shadow-lg",
    outline: "bg-transparent border-2 border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
    ghost: "bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text)]",
    accent: "bg-[var(--color-primary)] text-white hover:bg-white hover:text-black shadow-xl hover:shadow-primary/20",
  };

  const sizes = {
    sm: "px-6 py-3 text-[10px] rounded-full",
    md: "px-8 py-4 text-xs rounded-full",
    lg: "px-10 py-5 text-sm rounded-full",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {/* Background Hover Slide Effect */}
      <span className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 group-hover:w-full" />
      
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon size={size === 'sm' ? 14 : 18} />}
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
