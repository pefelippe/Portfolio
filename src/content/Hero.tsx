import { motion } from "framer-motion";
import React from "react";
{
}
export default function Hero() {
  return (
    <motion.div
      className="  flex flex-col mx-auto items-center justify-center 
     text-center   space-y-8   w-full"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="relative flex flex-col  mx-5  max-w-7xl justify-center items-center space-y-5"
      >
        {/* <motion.img
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.1 },
          }}
          transition={{
            duration: 0.5,
          }}
          alt="avatar-pefelippe"
          src="assets/avatar-pdr.png"
          className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px]"
        /> */}
        <div
          className="space-y-6 text-center text-4xl font-bold tracking-tight text-white sm:text-6xl 
        sm:tracking-tight text-[3rem] sm:text-[5rem] xl:text-[6rem] xl:tracking-tight 2xl:text-[6.5rem] "
        >
          <h1 className="w-full text-[#5865f2]">Pedro Felippe</h1>

          <p className="text-[3rem] sm:text-[4rem] xl:text-[5rem]">
            Web Developer{" "}
          </p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-col justify-center items-center "
        >
          <span className="text-base md:text-lg max-w-xl text-center ">
            <p>
              Experiência em implementar componentes de interface de usuário
              responsivos e de qualidade.{" "}
            </p>
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
