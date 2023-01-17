import React from "react";

import Footer from "../src/components/Footer";
import About from "../src/content/About";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";

import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="text-[#fff]   bg-[#191919] space-y-10 md:space-y-32">
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
        <Footer />
   
    </div>
  );
}
