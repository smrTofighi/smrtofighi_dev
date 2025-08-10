import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import SkillsSection from "./components/Sections/Skills/SkillsSection";
import ProjectsSection from "./components/Sections/Projects/ProjectsSection";
import AboutSection from "./components/Sections/AboutSection";
import { Contact } from "lucide-react";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Sections/Footer";

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
