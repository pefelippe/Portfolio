import RecentProjects from "../src/components/RecentProjects";
import Hero from "../src/content/Hero";
import Skills from "../src/content/Skills";
import CallToContact from "./contact";

export default function Home() {
  return (
    <div className="w-screen py-10  max-md:px-8  mx-auto max-md:space-y-20 space-y-40 ">
      <Hero />
      <Skills />
      <RecentProjects />
      {/* <CallToContact /> */}
    </div>
  );
}
