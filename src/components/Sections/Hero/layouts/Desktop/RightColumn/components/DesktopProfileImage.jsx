import React from "react";
import { useTheme } from "../../../../../../../context/ThemeContext";
import { motion } from "framer-motion";
import PROFILE from "../../../../../../../assets/images/dev.png";
const DesktopProfileImage = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="relative w-80 h-96 mx-auto">
      {/* دایره‌های انیمیشنی زیر تصویر */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-4 rounded-3xl border border-rose-500/30 z-0"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -inset-5 rounded-3xl border border-purple-500/30 z-0"
      />
      {/* تصویر اصلی روی دایره‌ها */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`relative w-80 h-96 rounded-3xl overflow-hidden border-4 ${
          isDarkMode ? "border-gray-800" : "border-gray-300"
        } z-10`}
      >
        <img
          src={PROFILE}
          alt="Profile Image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default DesktopProfileImage;
