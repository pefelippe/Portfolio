import { FaArrowDown } from "react-icons/fa";

import CallToContact from "../src/content/CallToContact";
import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";
import Skills from "../src/content/Skills";

export default function Home() {
  return (
    <div
      className="w-screen h-fit mx-auto  bg-[#fff] space-y-12 md:space-y-32
     text-[#141414] py-32  max-w-4xl "
    >
      <section className="relative  snap-center ">
        <Hero />
      </section>

      {/* <section className="text-[#141414] bg-[#fff] snap-center max-xl:px-8">
        <QuickAbout />
      </section> */}

      <section className="text-[#141414]  bg-[#fff] snap-center">
        <Skills />
      </section>

      <section className=" snap-center  text-[#141414] md:py-5 min-h-[60vh]">
        <RecentProjects />
      </section>

      <section className=" text-[#141414] snap-center min-h-[60vh]">
        <CallToContact />
      </section>
    </div>
  );
}
