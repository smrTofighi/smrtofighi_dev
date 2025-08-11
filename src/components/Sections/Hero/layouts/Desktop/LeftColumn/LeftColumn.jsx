import { containerVariants } from "../../../../../../utils/Helper";
import DesktopJobTitle from "./components/DesktopJobTitle";
import DesktopHeroTitle from "./components/DesktopHeroTitle";
import DesktopIntroText from "./components/DesktopIntroText";
import { motion } from "framer-motion";
import DesktopCatButtons from "./components/DesktopCatButtons";
import DesktopSocialLinks from "./components/DesktopSocialLinks";
const LeftColumn = ({ scrollToSection }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-left"
    >
      <DesktopJobTitle />
      <DesktopHeroTitle />
      <DesktopIntroText />

      <DesktopCatButtons scrollToSection={scrollToSection} />

      <DesktopSocialLinks />
    </motion.div>
  );
};

export default LeftColumn;
