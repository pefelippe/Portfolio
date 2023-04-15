import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto text-white ">
      <section className=" bg-[#fefefe] text-[#121212]">
        <Hero />
      </section>
      <section className=" bg-[#121212]">
        <QuickAbout />
      </section>
      {/* <section className="py-20 bg-[#121212]">
        <Skills />
      </section> */}
      <section className="py-10 bg-[#fefefe] text-[#121212]">
        <RecentProjects />
      </section>
      <section className="  bg-[#121212] ">
        <CallToContact />
      </section>
    </div>
  );
}
