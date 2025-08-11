import React from "react";
import { itemVariants } from "../../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../../context/ThemeContext";
const DesktopHeroTitle = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.h1
      variants={itemVariants}
      className="text-5xl xl:text-6xl font-light mb-8 leading-tight"
    >
      <span className={isDarkMode ? "text-white" : "text-gray-900"}>
        Designing & Building
      </span>
      <br />
      <span className="text-purple-600 font-medium">digital experiences</span>
      <br />
      <span className={isDarkMode ? "text-white" : "text-gray-900"}>
        that truly connect
      </span>
    </motion.h1>
  );
};

export default DesktopHeroTitle;
