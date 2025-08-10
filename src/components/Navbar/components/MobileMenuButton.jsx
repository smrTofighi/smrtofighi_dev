import React from "react";
import { motion } from "framer-motion";
import ThemeModeButton from "./ThemeModeButton";
import { useTheme } from "../../../context/ThemeContext";
import { Menu, X } from "lucide-react";
const MobileMenuButton = ({isMenuOpen , setIsMenuOpen}) => {
    const {isDarkMode} = useTheme();
  return (
    <div className="md:hidden flex items-center space-x-4">
      <ThemeModeButton />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`p-2 rounded-full transition-colors ${
          isDarkMode
            ? "text-gray-400 hover:text-white hover:bg-gray-800"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
        }`}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </motion.button>
    </div>
  );
};

export default MobileMenuButton;
