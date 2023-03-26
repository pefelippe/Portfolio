import CallToContact from "../src/components/CallToContact";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen ">
      <Hero />
      <Projects />
      <CallToContact />
    </div>
  );
}
