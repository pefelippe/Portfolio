import CallToContact from "../src/components/CallToContact";
import About from "../src/content/About";
import Skills from "../src/content/Skills";
import Projects from "./../src/content/Projects";

export default function Home() {
  return (
    <div className="w-screen max-w-7xl px-8 mx-auto py-10 md:py-20 space-y-20 md:space-y-32 ">
      <About />
      <Skills />
      <Projects />
      <CallToContact />
    </div>
  );
}
