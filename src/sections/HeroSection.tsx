import { motion } from "framer-motion";
import Link from "next/link";

function HeroSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75 }}
      className="flex max-md:flex-col items-start text-center justify-start h-full  tracking-wide gap-10 w-full max-w-6xl"
    >
      <div className="flex font-normal flex-col text-base tracking-wide text-start gap-4 ">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[92px] font-extrabold  leading-none 
          tracking-tighter text-blue dark:text-yellow-300"
        >
          Software Engineer, UI/UX Designer & Coffee Lover.
        </h2>

        <h2
          className="text-lg md:text-xl  font-light
          text-[#000] dark:text-gray-200 pt-2"
        >
          Developer dedicated to craft top-tier web solutions with a focus on
          simplicity and excellence since 2020.
        </h2>

        <h2
          className="text-lg md:text-xl  font-light
          text-[#000] dark:text-gray-200"
        >
          Reach me at{" "}
          <Link
            href={"mailto:pedfelippe@gmail.com"}
            className="font-bold hover:text-blue transition-all"
          >
            pedfelippe@gmail.com
          </Link>
          .
        </h2>
      </div>
    </motion.div>
  );
}

export default HeroSection;
