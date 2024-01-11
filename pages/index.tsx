import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col  relative w-full h-full mt-20 ">
      <section className=" flex flex-col  relative w-full h-full max-xl:px-6  gap-20  py-20 mx-auto  max-w-4xl">
        <Hero />
        <ProjectContent />
        <ContactContent />
      </section>
    </motion.div>
  );
}
