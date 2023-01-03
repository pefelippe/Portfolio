import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3];

  return (
    <div className="relative flex overflow-hidden flex-col text-left md:flex-row  max-w-7xl justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-28 xl:top-36 uppercase tracking-[20px] text-gray-300 text-2xl ">
        Projetos
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-hide">
        {projects.map((proj, i) => {
          return (
            <div
              key={proj}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen scrollbar-hide"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src="https://ps.w.org/easy-under-construction/assets/banner-772x250.png?rev=2417171"
                alt="img"
              />
              <div>
                <h4>Case Study {i + 1} - Under Contruction</h4>
              </div>
              <p className="text-lg text-center md:text-left">
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

      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
      -skew-y-12"
      />
    </div>
  );
}

export default Projects;
