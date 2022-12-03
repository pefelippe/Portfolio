import React from "react";

import Header from "../components/Header";
import Skills from "../components/Skills";
import About from "../components/About";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className=" text-white snap-y snap-mandatory z-0 min-w-500 scroll-smooth">
      <Header />

      <section id="hero" className="snap-start h-screen bg-[#1d1d1d]">
        <Hero />
      </section>

      <section id="about" className="snap-center h-screen text-[#000]">
        <About />
      </section>

      {/* <section id="skills" className="snap-center bg-[#1d1d1d] h-screen">
        <Skills />
      </section> */}
    </div>
  );
}
