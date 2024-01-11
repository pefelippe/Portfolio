import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col  relative w-full h-full mt-20 ">
      <section className="bg-[#121212] max-w-4xl mx-auto w-full  rounded">
        <Hero />
      </section>
      <section className=" flex flex-col  relative w-full h-full max-xl:px-6  gap-20  py-10 mx-auto  max-w-4xl">
        <ProjectContent />
        <ContactContent />
      </section>
    </motion.div>
  );
}
