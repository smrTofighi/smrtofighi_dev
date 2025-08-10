import { useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import NavbarLogo from "./components/NavbarLogo";
import MobileMenu from "./components/MobileMenu";
import MobileMenuButton from "./components/MobileMenuButton";
import DesktopNavigation from "./components/DesktopNavigation";
const Navbar = () => {
  const { isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  return (
    <motion.nav
      style={{ opacity: 1 }}
      className={`fixed top-0 w-full z-50 px-6 py-2 ${
        isDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
      } backdrop-blur-md border-b ${
        isDarkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavbarLogo />

        <DesktopNavigation scrollToSection={scrollToSection} />

        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>

      <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
    </motion.nav>
  );
};

export default Navbar;
