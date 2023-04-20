import { FaArrowDown } from "react-icons/fa";

import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto  bg-[#fff] text-[#141414]   ">
      <section className="relative  snap-center ">
        <Hero />
      </section>

      {/* <section className="text-[#141414] bg-[#fff] snap-center max-xl:px-8">
        <QuickAbout />
      </section> */}
      <section className="text-white  bg-[#181818] snap-center">
        <Skills />
      </section>

      <section className="relative snap-center   ">
        <RecentProjects />
      </section>

      <section className="relative  snap-center  text-white  bg-[#181818]">
        <CallToContact />
      </section>
    </div>
  );
}
