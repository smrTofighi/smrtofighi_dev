import React from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";

import PROFILE from "../../../assets/images/dev.png";
import PROFILE2 from "../../../assets/images/profile.jpg";
import PROFILE3 from "../../../assets/images/profile2.jpg";
import { containerVariants, itemVariants } from "../../../utils/Helper";
import AnimatedBackground from "./components/AnimatedBackground";
import MobileLayout from "./layouts/Mobile/MobileLayout";
import DesktopLayout from "./layouts/Desktop/DesktopLayout";
const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };
  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center relative px-6 pt-10"
      >
        <div className="absolute inset-0 overflow-hidden">
          <AnimatedBackground
            color={"bg-cyan-500"}
            duration={8}
            position={"top-20 right-20"}
            size={'w-40 h-40'}
            rotate={[0, 180, 360]}
          />
          <AnimatedBackground
            color={"bg-rose-500"}
            duration={5}
            position={"bottom-20 left-20"}
            size={'w-40 h-40'}
            rotate={[360, 180, 0]}
          />
        </div>
        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* Mobile Layout - Centered */}
         <MobileLayout scrollToSection={scrollToSection} />
          {/* Desktop Layout - Split */}
          <DesktopLayout scrollToSection={scrollToSection} />
        </div>
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
