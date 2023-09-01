
import { motion } from "framer-motion";

import About from "../src/content/About";

export default function Home() {
  return (
    <motion.div className=" flex flex-col text-center max-w-xl mx-auto px-8 ">
      <About />
    </motion.div>
  );
}
