import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

function Home() {
  useEffect(() => {
    document.title = "Nayely Pérez Berna — IA y ciencia de datos";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}

export default Home;
