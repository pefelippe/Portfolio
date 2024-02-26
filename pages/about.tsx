import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="min-h-[30vh] md:min-h-[50vh] flex flex-col items-center text-center justify-center h-full  max-w-4xl mx-auto tracking-wide"
    >
      <div className="flex font-light flex-col gap-5 md:gap-8 text-base tracking-wide  text-center">
        <span className="text-gray-500 dark:text-gray-300 text-base md:text-lg tracking-widest ">
          Ready to be shot into space. 🚀
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1] tracking-tighter dark:text-yellow-300">
          Frontend Developer, UI/UX Designer & Coffe Lover.
        </h2>
        <h2 className="text-base md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300 ">
          I am <b className="text-blue font-medium">Pedro Felippe</b>. I create
          simple and high-quality web products.
        </h2>
      </div>
    </motion.div>
  );
}

export default About;
