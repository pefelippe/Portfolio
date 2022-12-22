import React from "react";

import About from "../src/content/About";
import Contact from "../src/content/Contact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <>
      <section id="hero" className="snap-start ">
        <Hero />
      </section>

      <section id="about" className="snap-center ">
        <About />
      </section>

      <section id="skills" className="snap-center ">
        <Skills />
      </section>

      <section id="experience" className="snap-center ">
        <Experience />
      </section>

      {/* <section id="projects" className="snap-center white-component">
        <Projects />
      </section> */}

      <section id="contact" className="snap-center ">
        <Contact />
      </section>
    </>
  );
}
