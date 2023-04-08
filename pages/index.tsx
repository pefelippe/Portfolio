import RecentProjects from "../src/content/RecentProjects";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import Experience from "../src/content/Experience";
import CallToContact from "../src/content/CallToContact";

export default function Home() {
  return (
    <div className="w-screen py-10 lg:py-20 max-md:px-6  mx-auto max-md:space-y-20 space-y-40 ">
      <Hero />
      <Skills />
      {/* <Experience /> */}
      <RecentProjects />
      <CallToContact />
    </div>
  );
}
