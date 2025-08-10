import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext';
import ThemeModeButton from './ThemeModeButton';
const DesktopNavigation = ({scrollToSection}) => {
    const {isDarkMode} = useTheme();
  return (
    <div className="hidden md:flex items-center space-x-8">
          {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm uppercase tracking-wider transition-colors ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {item}
            </motion.button>
          ))}
          <ThemeModeButton />
        </div>
  )
}

export default DesktopNavigation