import React from "react";
import { itemVariants } from "../../../../../../../utils/Helper";
import { useTheme } from "../../../../../../../context/ThemeContext";
import { motion } from "framer-motion";
const DesktopIntroText = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.p
      variants={itemVariants}
      className={`text-xl ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      } mb-12 font-light leading-relaxed max-w-lg`}
    >
      I craft modern, high-performance web applications with clean code,
      engaging design, and user experiences that make an impact.
    </motion.p>
  );
};

export default DesktopIntroText;
