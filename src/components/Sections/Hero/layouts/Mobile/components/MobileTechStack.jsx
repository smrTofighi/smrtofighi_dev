import React from "react";
import { itemVariants } from "../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../context/ThemeContext";
const MobileTechStack = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      variants={itemVariants}
      className="flex justify-center items-center space-x-3 text-xs uppercase tracking-widest flex-wrap"
    >
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        React
      </span>
      <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        Node.JS
      </span>
      <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        TypeScript
      </span>
      <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        Flutter
      </span>
    </motion.div>
  );
};

export default MobileTechStack;
