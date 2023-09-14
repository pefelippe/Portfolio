/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import AnimatedLink from "../components/animated/AnimatedLink";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex max-lg:flex-col  h-[70vh]  items-center justify-center 
      gap-10 w-full 
     "
    >
      <div className="   leading-1 flex flex-col justify-center items-center max-w-md gap-5">
        <h1 className="text-7xl font-thin xs:text-4xl  leading-tight text-gray-100">
          Get in touch.
        </h1>

        <AnimatedLink
          href="/contact"
          className="text-[1.4rem]  text-lg px-12 text-center font-normal
          text-[#f5f5f5] leading-tight hover:bg-blue/90 transition-all 
           py-4  bg-blue rounded-full "
        >
          Message-me
        </AnimatedLink>
      </div>
    </motion.div>
  );
}

export default Contact;
