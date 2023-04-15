import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto text-white  xl:py-20 space-y-10 xl:space-y-32 py-20">
      <section className="">
        <Hero />
      </section>
      <section className="bg-[#121212] py-10 md:py-20">
        <QuickAbout />
      </section>
      {/* <section className="">
        <Skills />
      </section> */}
      {/* <section className=" w-full  py-10">
        <RecentProjects />
      </section> */}
      <section className="bg-[#101010]">
        <CallToContact />
      </section>
    </div>
  );
}
