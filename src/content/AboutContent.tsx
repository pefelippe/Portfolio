/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

function AboutContent() {
  return (
    <motion.div className="flex flex-col text-center items-center   rounded-3xl  w-full justify-around gap-7  max-w-3xl ">
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className="h-[140px] w-[140px] rounded-full"
      />
      <p className="text-[2.4rem] sm:text-6xl text-white leading-tight font-bold  max-w-xl">
        I create solutions.
      </p>

      <p className="w-full text-xl text-gray-300 max-w-xl">
        My professional journey has revolved around crafting digital products
        that encompass web applications, PWAs, websites, e-commerce platforms,
        and mobile apps.
      </p>

      {/* <AnimateLink
      className="rounded-md hover:bg-blue/80 bg-blue px-6 w-full  py-4 gap-3 font-semibold text-white mx-auto max-w-xs"
      href="/contact"
    >
      <div className=" justify-center flex items-center gap-3 transition-all rounded-xl text-2xl">
        <p>Send a message </p>
      </div>
    </AnimateLink> */}
    </motion.div>
  );
}

export default AboutContent;
