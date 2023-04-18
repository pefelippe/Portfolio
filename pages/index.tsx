import CallToContact from "../src/content/CallToContact";

import Hero from "../src/content/Hero";
import QuickAbout from "../src/content/QuickAbout";
import RecentProjects from "../src/content/RecentProjects";

export default function Home() {
  return (
    <div className="w-screen h-fit mx-auto  bg-[#fff]   text-[#141414] ">
      <section className="pt-[15vh] snap-center ">
        <Hero />
      </section>

      <section className="text-[#ffff]  bg-[#141414] snap-center">
        <QuickAbout />
      </section>

      <section className=" snap-center bg-[#fafafa] ">
        <RecentProjects />
      </section>

      <section className=" bg-[#141414] text-white snap-center py-5">
        <CallToContact />
      </section>
    </div>
  );
}
