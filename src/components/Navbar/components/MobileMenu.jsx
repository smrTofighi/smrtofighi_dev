import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'

const MobileMenu = ({isMenuOpen,scrollToSection}) => {
    const {isDarkMode} = useTheme();
  return (
    <AnimatePresence>
        {isMenuOpen &&
        (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            } border ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            {["Home", "Skills", "Work", "About", "Contact"].map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 5 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
  )
}

export default MobileMenu