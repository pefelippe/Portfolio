import CallToContact from "../src/components/CallToContact";
import About from "../src/content/About";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen px-8 max-w-7xl mx-auto py-10 md:py-20 space-y-20 md:space-y-32 ">
      <About />
      <Projects />
      <CallToContact />
    </div>
  );
}
