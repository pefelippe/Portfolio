import React from "react";

import Header from "../components/Header";
import About from "../components/About";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Head from "next/head";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory z-0 
    overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Pedro Felippe - Web Developer</title>
        <meta name="description" content="Portfolio" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-start white-component">
        <About />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="experience" className="snap-start white-component">
        <Experience />
      </section>

      <section id="contact" className="snap-start">
        <Contact />
      </section>

      <section id="footer" className="snap-start white-component">
        <Footer />
      </section>
    </div>
  );
}
