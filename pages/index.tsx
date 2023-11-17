import { motion } from "framer-motion";

import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col justify-center gap-[15vh] mx-auto w-full  h-fit  min-h-screen  items-start  px-6 overflow-hidden">
      <HeroContent />
      {/* <AboutContent /> */}
      {/* <ContactContent /> */}
    </motion.div>
  );
}
