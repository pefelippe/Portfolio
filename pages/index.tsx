import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col px-10 pb-20 max-w-6xl mx-auto gap-20 items-center justify-center  ">
      <HeroContent />
      {/* <ProjectContent /> */}
      <MessageForm />
    </motion.div>
  );
}
