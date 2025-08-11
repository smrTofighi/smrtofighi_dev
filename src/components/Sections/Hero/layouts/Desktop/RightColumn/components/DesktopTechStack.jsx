import React from "react";
import { itemVariants } from "../../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../../context/ThemeContext";
const DesktopTechStack = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center space-x-8 text-xs uppercase tracking-widest absolute -top-16 -left-28"
    >
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        React
      </span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        Node.JS
      </span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        TypeScript
      </span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>•</span>
      <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>
        Flutter
      </span>
    </motion.div>
  );
};

export default DesktopTechStack;
