import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
      className={`p-2 rounded-full transition-colors ${
        isDarkMode
          ? "text-gray-400 hover:text-white hover:bg-gray-800"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
      }`}
    >
      {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
    </motion.button>
  );
};

export default ThemeModeButton;
