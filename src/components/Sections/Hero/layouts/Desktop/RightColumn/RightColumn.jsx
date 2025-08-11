import React from "react";
import DesktopTechStack from "./components/DesktopTechStack";
import { imageVariants } from "../../../../../../utils/Helper";
import { motion } from "framer-motion";
import DesktopProfileImage from "./components/DesktopProfileImage";
const RightColumn = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={imageVariants}
      className="flex justify-center lg:justify-end"
    >
      <div className="relative">
        {/* Tech Stack - Desktop */}
        <DesktopTechStack />
        <DesktopProfileImage />
      </div>
    </motion.div>
  );
};

export default RightColumn;
