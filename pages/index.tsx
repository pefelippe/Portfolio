import { motion } from "framer-motion";

import Links from "../src/components/Links";
import MessageForm from "../src/components/MessageForm";
import HeroContent from "../src/content/HeroContent";

export default function Home() {
  return (
    <motion.div className=" flex flex-col px-10 max-w-screen-2xl mx-auto  gap-16 py-36 md:pt-52 items-center justify-center">
      <HeroContent />
      <Links />
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="object-fit items-center max-w-[350px] 
        flex-shrink-1 object-cover transition-all flex  rounded-full "
      />
      {/* <ProjectContent /> */}
      <MessageForm />
    </motion.div>
  );
}
