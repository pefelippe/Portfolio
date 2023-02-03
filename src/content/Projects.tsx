import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import ContentTitle from "../atoms/ContentTitle";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 2 }}
      className="contentStyle px-10"
    >
      <ContentTitle title="Meus Projetos" />

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
