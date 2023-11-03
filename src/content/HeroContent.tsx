/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center w-full  text-white text-center max-xl:px-6 lg:py-16
    justify-center mx-auto   gap-6 max-lg:max-w-xl max-lg:mx-auto max-lg:flex-col"
    >
      <div className="flex flex-col gap-4 lg:gap-6 ">
        <span className="text-6xl lg:text-8xl font-bold text-white max-lg:text-start ">
          I'm <span className="text-blue">Pedro Felippe</span> - Front-end
          Developer
        </span>

        <h3 className="text-lg lg:text-2xl font-medium text-[#888]  max-lg:text-start  ">
          Passion in creating simple yet visually appealing UIs.
        </h3>



        {/* <Link href="/contact">
          <motion.p
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.1 },
            }}
            className=" rounded-full py-4 px-12 w-fit  text-xl mx-auto font-medium text-white bg-blue transition-all hover:underline hover:bg-blue/80"
          >
            Get in touch
          </motion.p>
        </Link> */}
      </div>
    </motion.div>
  );
}
