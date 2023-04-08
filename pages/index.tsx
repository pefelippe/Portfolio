import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen py-20 max-md:px-6  mx-auto space-y-20 lg:space-y-36  ">
      <Hero />
      <Skills />
      {/* <Experience /> */}
      <RecentProjects />
      <CallToContact />
    </div>
  );
}
