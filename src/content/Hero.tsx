/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  ArrowRight,
  File,
  LinkedinIcon,
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      id="about-content"
      className="content-intern gap-6 xl:gap-20 justify-start text-start items-center lg:flex-row min-h-screen"
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col gap-8 justify-start h-full my-auto items-start max-w-4xl  max-sm:max-w-md "
      >
        <p className="max-sm:text-4xl text-6xl lg:text-7xl font-bold  text-blue tracking-tight">
          Experience developing robust and responsive web applications.
        </p>
        <span className=" text-lg lg:text-2xl max-w-xl text-gray-400">
          I am Pedro Felippe, a Web Developer based in Brazil.
        </span>

        <motion.div
          className="flex justify-start max-sm:flex-col max-sm:gap-8 relative w-full
            items-center sm:space-x-8 max-sm:pt-4"
        >
          <ScrollLink
            to="contact-content"
            offset={-50}
            className="max-sm:w-full"
          >
            <Button className="text-xl py-7 px-10 rounded items-center gap-1  max-sm:w-full  tracking-normal font-semibold bg-blue">
              Contact-me
            </Button>
          </ScrollLink>

          <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-8 "
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
            </AnimatedBtn>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        src="./assets/avatar-pdr.png"
        className="max-h-[350px]  h-full lg:min-h-[400px] xl:min-h-[450px] mx-auto rounded-3xl  object-cover  max-lg:hidden  "
      />
    </motion.div>
  );
}
