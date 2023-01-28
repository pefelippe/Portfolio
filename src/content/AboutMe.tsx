import { motion } from "framer-motion";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.75 }}
      className="flex flex-col items-center  max-w-7xl mx-auto gap-8"
    >
      <h3 className=" text-center text-3xl font-bold tracking-tight md:text-4xl underline decoration-[#5865f2] ">
        Quem sou eu
      </h3>
      <div className="flex flex-col xl:flex-row items-center justify-center gap-8 ">
        <div className="flex flex-col gap-8">
          <motion.img
            animate={{}}
            transition={{
              duration: 1.75,
              scale: 2,
            }}
            alt="avatar-pefelippe"
            src="assets/avatar-pdr.png"
            className="rounded-full h-[150px] w-[150px] border-4"
          />
        </div>

        <span className="flex flex-col w-fit max-w-2xl items-center   max-lg:text-center">
          <div className="text-[1.1rem] text-grey-300 ">
            Sou um{" "}
            <span className="text-[#5865f2] font-semibold decoration-[#5865f2] ">
              Web Developer
            </span>{" "}
            com 3+ anos de experiência no mercado. <br/> Minha principal stack hoje é{" "}
            <span className="underline  decoration-[#5865f2]">
              React, Typescript e Next.js.<br/>
            </span>
            {"  "}
            Além disso, estudei{" "}
            <span className=" text-[#5865f2] font-semibold decoration-[#5865f2]">
              Ciência da Computação
            </span>{" "}
            na UFC e consigo falar e entender bem{" "}
            <span className=" text-[#5865f2] font-semibold decoration-[#5865f2]">
              Inglês{"  "}
            </span>
            <span className="underline  decoration-[#5865f2]">(nível C2)</span>.
          </div>
        </span>
      </div>
    </motion.div>
  );
}

export default About;
