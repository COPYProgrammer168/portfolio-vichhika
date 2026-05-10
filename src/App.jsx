import { useTheme } from "./hooks/useTheme";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

export default function App() {
  const [dark, toggleTheme] = useTheme();
  const [introDone, setIntroDone] = useState(false);

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <>
        {!introDone && <Intro onCompletion={() => setIntroDone(true)} />}
        <div style={{ visibility: introDone ? "visible" : "hidden" }}></div>
      </>

      {/* Grid texture background */}
      <div className="grid-bg" />

      {/* Gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background: dark
            ? "radial-gradient(ellipse at 20% 50%, rgba(0,245,228,0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.04) 0%, transparent 50%)"
            : "radial-gradient(ellipse at 20% 50%, rgba(0,102,255,0.05) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.04) 0%, transparent 50%)",
        }}
      />

      <Navbar dark={dark} toggleTheme={toggleTheme} />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
