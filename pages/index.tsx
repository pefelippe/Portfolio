import { motion } from "framer-motion";

import About from "../src/content/About";
import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col   w-full h-full text-[#101010] mt-20">
      <section className="flex flex-col relative w-full h-full max-xl:px-6 mx-auto ">
        <Hero />
      </section>
      <section className=" flex flex-col  relative w-full h-full max-xl:px-6 py-10 xl:py-20  mx-auto  border-t">
        <About />
      </section>
      <section className="  w-full h-full max-xl:px-6  py-10 xl:py-20 border-y bg-gray-100/20">
        <ProjectContent />
      </section>
      <section className="  w-full h-full max-xl:px-6 py-10 xl:py-20">
        <ContactContent />
      </section>
    </motion.div>
  );
}
