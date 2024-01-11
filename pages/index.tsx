import { motion } from "framer-motion";

import ContactContent from "../src/content/ContactContent";
import Hero from "../src/content/Hero";
import ProjectContent from "../src/content/ProjectContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col  relative w-full h-full mt-20 gap-20 py-20">
      <section className=" flex flex-col  relative w-full h-full max-xl:px-6   mx-auto  ">
        <Hero />
      </section>
      <section className="  w-full h-full max-xl:px-6 bg-gray-300/10 py-10 xl:pb-32">
        <ProjectContent />
      </section>
      <section className="  w-full h-full max-xl:px-6 ">
        <ContactContent />
      </section>
    </motion.div>
  );
}
