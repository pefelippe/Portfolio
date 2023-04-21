import { FaArrowDown } from "react-icons/fa";

import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen  mx-auto  bg-[#fff] text-[#141414] py-24 md:py-40 space-y-20 md:space-y-32  max-xl:px-8 max-w-4xl">
      <section className="relative  snap-center ">
        <Hero />
      </section>

      {/* <section className="text-[#141414] bg-[#fff] snap-center max-xl:px-8">
        <QuickAbout />
      </section> */}
      {/* <section className="text-white  snap-center">
        <Skills />
      </section> */}

      <section className=" snap-center   ">
        <RecentProjects />
      </section>

      <section className="relative snap-center ">
        <CallToContact />
      </section>
    </div>
  );
}
