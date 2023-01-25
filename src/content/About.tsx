import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex w-fit max-w-7xl flex-col  items-center justify-center mx-auto max-lg:space-y-8 xl:space-x-12 xl:flex-row  ">
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
        className="rounded-full h-[250px] w-[250px]   border-8"
      />

      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 2.5,
        }}
        className="flex  flex-col  max-xl:items-center justify-center  max-w-xl "
      >
        <h4 className=" text-4xl font-semibold ">
          <span className=" bg-[#000] text-[#fff] p-2 ">Quem sou eu</span>
        </h4>

        <p className="text-base md:text-xl max-lg:p-[20px] max-lg:text-center pt-5">
          Consigo me comunicar bem em inglês (nível C2), sendo acostumado a
          participarem reuniões em inglês com membros de vários países.
          <br />
          <br />
          Atuo como Web Developer no{" "}
          <a
            href="https://www.atlantico.com.br/"
            className="font-semibold underline text-[#5865f2]"
          >
            Instituto Atlântico
          </a>
          .
        </p>
      </motion.div>
    </div>
  );
}

export default About;
