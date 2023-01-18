import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div
      className=" flex flex-col xl:flex-row justify-center xl:gap-32
      max-xl:px-5 xl:mx-auto items-center max-w-7xl  space-y-8 "
    >
      {/* <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.5,
        }}
      >
        <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{
            duration: 0.5,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[250px] w-[250px] md:h-[350px] md:w-[350px] "
        />
      </motion.div> */}
    </div>
  );
}

export default About;
