import React from "react";

import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import About from "../src/content/About";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import Projects from "../src/content/Projects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <>
      <div className="text-[#fff]   bg-[#191919] bg-[url('/assets/endless-constellation.svg')] space-y-20">
        <Header />
        <section id="hero" className="">
          <Hero />
        </section>
        <section id="about" className="">
          <About />
        </section>

        <section id="skills" className="">
          <Skills />
        </section>

        <section id="experience" className="">
          <Experience />
        </section>
        <Footer />

        {/* <section id="experience" className="">
          <Projects />
        </section> */}
      </div>
    </>
  );
}
