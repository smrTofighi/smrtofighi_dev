import LeftColumn from './LeftColumn/LeftColumn'
import { motion } from 'framer-motion'
import PROFILE from '../../../../../assets/images/dev.png'
import RightColumn from './RightColumn/RightColumn'
const DesktopLayout = ({scrollToSection}) => {
 
  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left Column - Content */}
            <LeftColumn scrollToSection={scrollToSection} />

            {/* Right Column - Profile Image */}
            <RightColumn />
          </div>
  )
}

export default DesktopLayout