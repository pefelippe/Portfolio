import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit  mx-auto  text-white ">
      <section className="">
        <Hero />
      </section>
      <section className="bg-[#161616]">
        <Skills />
      </section>
      {/* <section className="  w-full mx-auto rounded-md py-10">
        <RecentProjects />
      </section> */}
      <section className="">
        <CallToContact />
      </section>
    </div>
  );
}
