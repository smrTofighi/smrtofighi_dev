import React from "react";
import { useTheme } from "../../../../context/ThemeContext"; 
import { motion } from "framer-motion";
const AnimatedBackground = ({rotate, position, size, color, duration}) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      animate={{ scale: [0.75, 1.2, 0.75], rotate: rotate }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
      }}
      className={`absolute ${position} ${size} rounded-full blur-3xl ${color} ${
        isDarkMode ? 'opacity-20' : 'opacity-50'
      }`}
    />
  );
};

export default AnimatedBackground;
