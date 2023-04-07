import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen py-10 lg:py-40 px-8 max-w-7xl mx-auto space-y-16 md:space-y-32 ">
      <Hero />
      <Skills />
    </div>
  );
}
