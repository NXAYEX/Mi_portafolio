import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    document.title = "Nayely Pérez Berna — IA y ciencia de datos";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default Home;
