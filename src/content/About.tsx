/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import Skills from "../components/Skills";

export default function About() {
  return (
    <motion.div
      id="about-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="content-intern"
    >
      <div className="w-full font-normal flex flex-col justify-center text-lg  h-fit ">
        <h1 className="section-title">About</h1>
        <h3 className="section-subtitle">
          A dedicated developer based in Brazil.
        </h3>
      </div>
      <div className="flex gap-16 items-center">
        <motion.img
          src="assets/pedrof.jpg"
          alt="pedrofelippe"
          className="flex-shrink-1 object-cover relative max-lg:hidden max-w-md rounded-md w-full shadow-2xl "
        />
        <div className="flex gap-4 flex-col w-full">
          <Skills />
          <p className=" text-xl leading-relaxed ">
            With a proven track record of contributing to the development of
            digital products for renowned companies like HP Inc and Furukawa
            Electric. <br /> <br /> I leverage my technical expertise to design
            and build user-friendly web applications using React, Next.js, and
            TypeScript. <br /> <br /> My proficiency extends to creating robust
            RESTful APIs with Node.js, managing databases, and ensuring a
            seamless integration with CI/CD pipelines.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
