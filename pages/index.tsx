import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col mx-auto w-screen  max-lg:px-10 max-w-xl pt-[10vh] ">
      <section className=" ">
        <HeroContent />
      </section>
    </motion.div>
  );
}
