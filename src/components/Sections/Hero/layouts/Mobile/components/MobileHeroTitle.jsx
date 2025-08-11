import React from "react";
import { itemVariants } from "../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../context/ThemeContext";

const MobileHeroTitle = () => {
  const { isDarkMode } = useTheme(); 
  return (
    <motion.h1
      variants={itemVariants}
      className="text-3xl md:text-5xl font-light mb-6 leading-tight"
    >
      <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
        Designing & Building
      </span>
      <br />
      <span className="text-purple-500 font-medium ml-2">digital experiences</span>
      <br />
      <span className={`${isDarkMode ? "text-white" : "text-gray-900"}`}>
        that truly connect
      </span>
    </motion.h1>
  );
};

export default MobileHeroTitle;
