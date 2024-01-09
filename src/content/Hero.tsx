/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      className="flex  w-full  justify-between items-center  text-start  max-w-7xl mx-auto min-h-[70vh] mt-16
      text-white max-xl:px-6 gap-10"
    >
      <motion.div className="flex justify-start flex-col  items-start gap-10 max-w-7xl w-fit z-30">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold tracking-normal  max-w-3xl"
        >
          I'm <span className="text-[#f0e140]">Pedro Felippe</span>, a Web
          Developer based in Brazil.
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-lg md:text-2xl font-normal leading-normal gap-4 flex flex-col max-w-3xl w-full  "
        >
          Since 2018, my focus is on finding the best ways to enhance user
          experience and create simple, fast and easy-to-use web interfaces.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex max-md:flex-col max-md:space-y-4 md:space-x-4 w-full items-start max-w-xl text-[#121221] "
        >
          <Link
            style={{
              width: "100%",
            }}
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Button
              variant="secondary"
              className="flex items-center w-full  py-7 gap-2 bg-black text-white hover:bg-black/70"
            >
              <span className="text-xl">Projects</span>
            </Button>
          </Link>

          <Link
            style={{
              width: "100%",
            }}
            activeClass="active"
            to="contact-content"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Button
              variant="secondary"
              className="flex items-center w-full  py-7  gap-2"
            >
              <span className="text-xl">Contact</span>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
