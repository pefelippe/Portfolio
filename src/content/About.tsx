/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

import { Skills } from "../components/Skills";

export default function About() {
  const skillList = [
    "react",
    "tailwind",
    "next",
    "typescript",
    "node",
    "angular",
    "AWS",
    "AZURE",
    "golang",
    "docker",
    "python",
    "shadcn",
    "selenium",
  ];
  return (
    <motion.div
      id="about-content"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="content-intern flex-row max-md:flex-col gap-8 md:gap-12 md:items-center "
    >
      <div className="flex max-lg:flex-col lg:gap-16 items-start ">
        <div className="flex gap-8 flex-col w-full  ">
          <h3 className="section-subtitle">
            A frontend developer based in Brazil.
          </h3>
          <p className="text-xl max-w-xl lg:text-xl font-normal leading-tight ">
            In the last years i have been dedicated to solving complex problems
            for companies using simple and well-executed solutions, developing
            user-friendly web applications, creating robust RESTful APIs,
            managing databases, and ensuring seamless integration with CI/CD
            pipelines.
          </p>
          <Skills technologies={skillList} />
        </div>
      </div>

      <motion.img
        src="assets/avatar-pdr.png"
        alt="pedrofelippe"
        className="flex-shrink-1 object-cover relative  w-full  max-md:max-h-[300px] lg:max-w-sm rounded-md lg:rounded-full "
      />
    </motion.div>
  );
}
