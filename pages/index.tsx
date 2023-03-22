import CallToContact from "../src/components/CallToContact";
import About from "../src/content/About";
import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen px-8 max-w-7xl mx-auto pb-20">
      <Hero />
      <div className="space-y-20 md:space-y-40">
        <About />
        <Projects />
        <CallToContact />
      </div>
    </div>
  );
}
