import { motion } from "framer-motion";

import AboutContent from "../src/content/AboutContent";
import ContactContent from "../src/content/ContactContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className="flex flex-col  relative w-full h-full min-h-fit mt-16 ">
      <section className="bg-[#505ded]">
        <AboutContent />
      </section>

      <section className=" w-full bg-[#fff] text-[#121212] mx-auto  max-xl:px-6 ">
        <HeroContent />
      </section>
      <section className=" w-full bg-[#121212] text-white mx-auto gap-20">
        <ContactContent />
      </section>
    </motion.div>
  );
}
