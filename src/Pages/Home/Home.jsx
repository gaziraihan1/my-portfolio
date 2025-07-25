import React from "react";
import Bannner from "../../Components/Banner/Bannner";
import About from "../../Components/About/About";
import Skills from "../../Components/Skill/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 md:px-4">
      <Bannner />
      <section id="about-me">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
