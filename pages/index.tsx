import Head from "next/head";

import Header from "../components/Header";

import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className="bg-[#121214] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 min-w-400 min-h-min scroll-smooth ">
      <Head>
        <title>pefelippe.dev - 🚧 under construction 🚧 </title>
        <meta name="description" content="Pefelippe Portfolio" />
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
    </div>
  );
}
