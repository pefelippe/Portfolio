import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function Posts({}: Props) {
  const projects = [1, 2, 3];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col p-36  max-w-7xl justify-evenly mx-auto items-center z-0 space-y-10 max-xl:px-8 "
    >
      <h3 className="mt-2 w-full  text-center text-3xl font-bold tracking-tight  md:text-5xl lg:text-5xl underline decoration-[#5865f2]">
        Posts
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-hide ">
        {projects.map((proj) => {
          return (
            <div
              key={proj}
              className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center scrollbar-hide"
            >
              <Image
                width="600"
                height="600"
                src="/assets/banner.png"
                alt="img"
              />

              <p className="text-lg text-center md:text-left max-w-4xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Posts;
