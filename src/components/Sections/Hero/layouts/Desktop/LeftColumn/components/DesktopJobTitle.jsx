import React from "react";
import { textVariants } from "../../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../../context/ThemeContext";
const DesktopJobTitle = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      variants={textVariants}
      className={`text-sm uppercase tracking-widest ${
        isDarkMode ? "text-gray-500" : "text-gray-600"
      } mb-6`}
    >
      Full Stack Developer
    </motion.div>
  );
};

export default DesktopJobTitle;
