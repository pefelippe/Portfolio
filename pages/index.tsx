import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit max-md:px-6  mx-auto ">
      <Hero />
      {/* <Skills /> */}
      <RecentProjects />
      <CallToContact />
    </div>
  );
}
