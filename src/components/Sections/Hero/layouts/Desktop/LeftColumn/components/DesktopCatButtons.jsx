import React from "react";
import { useTheme } from "../../../../../../../context/ThemeContext";
import { itemVariants } from "../../../../../../../utils/Helper";
import { motion } from "framer-motion";
const DesktopCatButtons = ({ scrollToSection }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div variants={itemVariants} className="flex gap-6 mb-8">
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("work")}
        className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300"
      >
        View Work
      </motion.button>
      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => scrollToSection("contact")}
        className={`border ${
          isDarkMode
            ? "border-gray-700 hover:border-gray-600 text-gray-300"
            : "border-gray-300 hover:border-gray-400 text-gray-700"
        } px-8 py-4 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
      >
        Get In Touch
      </motion.button>
    </motion.div>
  );
};

export default DesktopCatButtons;
