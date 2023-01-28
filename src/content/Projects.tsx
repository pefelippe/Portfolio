import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.5 }}
      className="relative flex flex-col  max-w-7xl justify-evenly mx-auto items-center z-0 space-y-10 max-xl:px-8 "
    >
      <h3 className=" w-full  text-center text-3xl font-bold tracking-tight  md:text-4xl ">
        Projetos
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-hide ">
        {projects.map((proj) => {
          return (
            <div
              key={proj}
              className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center scrollbar-hide"
            >
              <Image
                width="700"
                height="600"
                src="/assets/banner.png"
                alt="img"
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Projects;
