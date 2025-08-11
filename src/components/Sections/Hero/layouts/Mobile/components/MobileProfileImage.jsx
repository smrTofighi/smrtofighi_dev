import React from 'react'
import PROFILE from "../../../../../../assets/images/dev.png";
import PROFILE2 from "../../../../../../assets/images/profile.jpg";
import PROFILE3 from "../../../../../../assets/images/profile2.jpg";
import { imageVariants } from '../../../../../../utils/Helper';
import { useTheme } from '../../../../../../context/ThemeContext';
import { motion } from 'framer-motion';
const MobileProfileImage = () => {
    const {isDarkMode} = useTheme()
  return (
    <motion.div variants={imageVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`w-full h-32 rounded-2xl overflow-hidden border-4 ${
                isDarkMode ? "border-gray-800" : "border-gray-300"
              } shadow-2xl`}
            >
              <img
                src={PROFILE}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
            {/* Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-2 rounded-2xl border border-purple-500/20"
            />
          </div>
        </motion.div>
  )
}

export default MobileProfileImage