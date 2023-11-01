/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center w-full  text-white text-center
    justify-center   max-xl:px-6  mx-auto max-w-5xl py-10 gap-6 "
    >
      <motion.img
        src="/assets/avatar-pdr.png"
        alt="me"
        className=" h-[150px] lg:h-[256px]  mx-auto rounded-full"
      />

      <div className="flex max-w-5xl flex-col gap-4">
        <span className="text-5xl lg:text-7xl font-bold text-white w-full">
          Olá. Eu sou o <span className="text-blue">Pedro Felippe</span>!
        </span>

        <h3 className="text-[#B3AFC0] font-light text-xl lg:text-2xl max-w-3xl mx-auto">
          My passion lies in creating simple yet visually appealing UIs, and I
          always strive to deliver high-quality code with great attention to
          detail.
        </h3>

        <div className="flex relative items-center justify-center gap-5">
          <AnimatedBtn
            href="https://github.com/pefelippe"
            className="font-semibold text-md px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Github</p>
          </AnimatedBtn>

          <AnimatedBtn
            href="https://www.linkedin.com/in/pedro-felippe/"
            className="font-semibold text-md  px-2 py-2 tracking-[4px] uppercase hover:text-gray-300"
          >
            <p>Linkedin</p>
          </AnimatedBtn>
        </div>
      </div>
    </motion.div>
  );
}
