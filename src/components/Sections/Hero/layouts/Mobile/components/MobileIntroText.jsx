import React from "react";
import { itemVariants } from "../../../../../../utils/Helper";
import { useTheme } from "../../../../../../context/ThemeContext";
import { motion } from "framer-motion";
const MobileIntroText = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.p
      variants={itemVariants}
      className={`text-base md:text-lg ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      } mb-8 max-w-xl mx-auto font-light leading-relaxed`}
    >
      I craft modern, high-performance web applications with clean code,
      engaging design, and user experiences that make an impact.
    </motion.p>
  );
};

export default MobileIntroText;
