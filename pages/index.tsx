import Head from "next/head";

import Header from "../components/Header";

import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-[#0f0f11] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 min-w-500 scroll-smooth ">
      <Head>
        <title>Pedro Felippe</title>
        <meta name="description" content=" Portfolio" />
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
