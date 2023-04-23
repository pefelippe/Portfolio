import { FaArrowDown } from "react-icons/fa";

import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div className="w-screen   text-[#2d2e32]  ">
      <section className="relative  snap-center max-w-4xl mx-auto py-20 max-xl:px-6">
        <Hero />
      </section>

      {/* <section className="text-white  snap-center ">
        <Skills />
      </section> */}
      {/* <section className="text-[#141414] bg-[#fff] snap-center max-xl:px-8">
        <QuickAbout />
      </section> */}

      <section className="realtive snap-center  bg-[#f5f5f5] py-10 md:py-20 max-xl:px-6">
        <RecentProjects />
      </section>

      <section className="relative snap-center py-10 md:py-20 max-xl:px-6">
        <CallToContact />
      </section>
    </div>
  );
}
