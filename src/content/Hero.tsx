/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div className="flex flex-col w-full gap-10 justify-center text-start  ">
      <motion.div className="flex justify-between  w-full  h-fit mx items-center max-md:flex-col gap-16 ">
        <motion.img
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 1 }}
          src="/assets/pedrof.jpg"
          alt="pedro felippe"
          className="flex-shrink-0 object-cover  h-full max-w-[350px] rounded-3xl  max-xl:hidden"
        />
        <motion.div className="flex flex-col justify-center   items-start gap-6 w-fit ">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-5xl md:text-7xl font-bold tracking-normal leading-tight max-w-3xl"
          >
            I'm Pedro Felippe, a Web Developer based in Brazil.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.75 }}
            className="text-xl font-normal leading-normal gap-4 flex flex-col max-w-2xl w-full "
          >
            <h3>
              Since 2018, my focus is on finding the best ways to enhance user
              experience and craft simple, fast and easy-to-use web interfaces.
              I've worked in companies and taken on freelance projects and
              consulting for clients.
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="flex space-x-6"
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <FaLinkedin className="h-9 w-9 hover:text-blue transition-all" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <FaGithub className="h-9 w-9 hover:text-blue transition-all" />
            </AnimatedBtn>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
