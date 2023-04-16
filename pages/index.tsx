import CallToContact from "../src/content/CallToContact";
import Experience from "../src/content/Experience";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto  bg-[#fafafa]   text-[#141414] ">
      <section className=" snap-center">
        <Hero />
      </section>

      {/* <section className="text-[#ffff]  bg-[#141414] snap-center">
        <QuickAbout />
      </section>

      <section className=" snap-center bg-[#fafafa] ">
        <RecentProjects />
      </section>
*/}
      <section className=" bg-[#141414] text-white snap-center">
        <CallToContact />
      </section>
    </div>
  );
}
