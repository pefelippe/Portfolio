/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center w-full  text-white text-center
    justify-center    mx-auto max-w-5xl py-10 gap-6 "
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className=" h-[150px] lg:h-[220px]  mx-auto rounded-full"
      />

      <div className="flex max-w-5xl flex-col gap-6">
        <span className="text-5xl lg:text-7xl font-bold text-white w-full">
          Hey. I'm <span className="text-blue">Pedro Felippe</span>!
        </span>

        <h3 className="text-[#B3AFC0] font-light text-xl lg:text-2xl max-w-3xl mx-auto">
          Web Developer with passion in creating simple yet visually appealing
          UIs. Always strive to deliver high-quality code with great attention
          to detail.
        </h3>

        <div className="flex relative items-center justify-center gap-8 text-lg">
          <AnimatedBtn
            href="https://github.com/pefelippe"
            className="font-semibold px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Github</p>
          </AnimatedBtn>

          <AnimatedBtn
            href="https://www.linkedin.com/in/pedro-felippe/"
            className="font-semibold   px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Linkedin</p>
          </AnimatedBtn>
          <AnimatedBtn
            href="https://docs.google.com/document/d/e/2PACX-1vQ0oK4H_ynaCvtXwtO4OvYmIIt4_6vn8lTQlWqj2KnoTR4ZfUWCzjpAuDPGToTPzwoqkN9FIEbiD7MU/pub"
            className="font-semibold  px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Resume</p>
          </AnimatedBtn>
        </div>
      </div>
    </motion.div>
  );
}
