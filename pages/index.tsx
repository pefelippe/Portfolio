import CallToContact from "../src/components/CallToContact";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen max-w-7xl px-8 mx-auto py-10 md:py-20 space-y-10 md:space-y-32 ">
      <Hero />
      <Skills />
      <Projects />
      <CallToContact />
    </div>
  );
}
