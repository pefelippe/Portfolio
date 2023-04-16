import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto  text-white">
      <section className=" text-[#ffff]">
        <Hero />
      </section>

      <section className="max-xl:py-10 bg-[#161616]">
        <Skills />
      </section>

      {/* <section className="max-xl:py-10 ">
        <QuickAbout />
      </section> */}

      {/* blog posts */}

      {/* <section className="max-xl:py-10  bg-[#161616] ">
        <RecentProjects />
      </section> */}
      {/* <section className="py-10  ">
        <CallToContact />
      </section> */}
    </div>
  );
}
