import Head from "next/head";

import Header from "../components/Header";

import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-[#121214] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 min-w-500 scroll-smooth ">
      <Head>
        <title>Pedro Felippe - Web Developer</title>
        <meta name="description" content="Pefelippe Portfolio" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>
    </div>
  );
}
