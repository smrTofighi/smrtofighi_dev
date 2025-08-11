import { containerVariants } from "../../../../../utils/Helper";
import { motion } from "framer-motion";
import MobileProfileImage from "./components/MobileProfileImage";
import MobileJobTitile from "./components/MobileJobTitile";
import MobileHeroTitle from "./components/MobileHeroTitle";
import MobileIntroText from "./components/MobileIntroText";
import MobileCatButtons from "./components/MobileCatButtons";
import MobileSocialLinks from "./components/MobileSocialLinks";
import MobileTechStack from "./components/MobileTechStack";
const MobileLayout = ({ scrollToSection }) => {
  return (
    <div className="block lg:hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center"
      >
        {/* Profile image - Mobile */}
        <MobileProfileImage />
        {/* Content - Mobile */}
        <MobileJobTitile />
        <MobileHeroTitle />
        <MobileIntroText />

        <MobileCatButtons scrollToSection={scrollToSection} />

        <MobileSocialLinks />

        <MobileTechStack />
      </motion.div>
    </div>
  );
};

export default MobileLayout;
