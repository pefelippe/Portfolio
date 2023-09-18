import { motion } from "framer-motion";

import MessageForm from "../src/components/MessageForm";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col px-10 max-w-screen-2xl mx-auto gap-20 pb-10">
      <HeroContent />
      {/* <ProjectContent /> */}
      <MessageForm />
    </motion.div>
  );
}
