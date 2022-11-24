import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 min-w-400">
      <Head>
        <title>pefelippe.dev</title>
        <meta name="description" content="Pefelippe Portfolio" />
        <Link href="/dist/output.css" rel="stylesheet" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>
      <section id="projects" className="snap-end">
        <Projects />
      </section>
    </div>
  );
}
