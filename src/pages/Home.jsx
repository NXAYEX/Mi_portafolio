import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";

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
      </main>
    </>
  );
}

export default Home;
