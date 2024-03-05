import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <motion.div className="flex max-md:flex-col items-start text-start justify-start h-full  tracking-wide gap-10 w-full">
      <div className="flex font-normal flex-col text-base tracking-wide text-center gap-10 ">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[150px] font-extrabold 
           text-blue dark:text-yellow-300"
        >
          Pedro Felippe
        </motion.h2>

        {/* <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-2xl  font-normal max-w-3xl mx-auto
          text-[#000] dark:text-gray-200 pt-2"
        >
          Frontend Engineer and Product Designer, currently available for work.
        </motion.h3> */}

        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="flex gap-5 mx-auto  font-normal text-lg   "
        >
          linkedin
        </motion.div> */}
      </div>
    </motion.div>
  );
}

export default HeroSection;
