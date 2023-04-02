import CallToContact from "../src/components/CallToContact";
import Hero from "../src/content/Hero";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen  px-8 max-w-7xl mx-auto space-y-20 md:space-y-32 ">
      <Hero />
      {/* <Projects />
      <CallToContact /> */}
    </div>
  );
}
