import { Mail } from "lucide-react";
import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { itemVariants } from "../../../../../../utils/Helper";
import { motion } from "framer-motion";
import { useTheme } from "../../../../../../context/ThemeContext";
const MobileSocialLinks = () => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      variants={itemVariants}
      className="flex justify-center space-x-6 mb-8"
    >
      {[
        { icon: FiGithub, href: "https://github.com/smrTofighi" },
        { icon: FiLinkedin, href: "https://linkedin.com/in/smrtofighi" },
        { icon: Mail, href: "mailto:mrtofxn@gmail.com" },
      ].map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          whileHover={{ y: -3, scale: 1.1 }}
          className={`p-3 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default MobileSocialLinks;
