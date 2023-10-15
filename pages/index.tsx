import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";
import AboutContent from "../src/content/AboutContent";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col px-10 py-20 mx-auto gap-28 items-center justify-center  ">
      <HeroContent />

      <AboutContent />
      {/* <ProjectContent /> */}
      <MessageForm />
    </motion.div>
  );
}
