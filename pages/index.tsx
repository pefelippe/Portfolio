import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto  text-white">
      <section className=" text-[#ffff]  bg-[#141414]">
        <Hero />
      </section>

      <section className="max-xl:py-10  text-[#161616]">
        <QuickAbout />
      </section>
      <section className="py-20   bg-[#161616] ">
        <Skills />
      </section>

      {/* blog posts */}

      <section className="py-20 text-[#161616]">
        <RecentProjects />
      </section>
      <section className="py-10 bg-[#161616]  ">
        <CallToContact />
      </section>
    </div>
  );
}
