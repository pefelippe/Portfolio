import React from "react";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import About from "../src/content/About";
import Contact from "../src/content/Contact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className=" text-[#fff]   bg-[#191919]">
      <Header />

      <div className="space-y-10 md:space-y-24">
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center ">
          <About />
        </section>

        <section id="skills" className="mx-5 snap-center">
          <Skills />
        </section>

        <section id="experience" className="snap-center">
          <Experience />
        </section>

        <section id="contact" className="mx-5 snap-center">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}
