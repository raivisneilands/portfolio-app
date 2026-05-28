import "./styles/global.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Education from "./components/sections/Education";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";

import { NAV_LINKS } from "./data/portfolioData";

import useActiveSection from "./hooks/useActiveSection";

export default function App() {
  const active = useActiveSection(NAV_LINKS);

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="app">
      <Navbar active={active} scrollTo={scrollTo} />

      <main className="container">
        <Hero scrollTo={scrollTo} />

        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}