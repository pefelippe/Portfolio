/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import AnimatedBtn from "../components/animated/AnimatedBtn";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="hero-container"
      className="flex relative w-full max-md:flex-col tracking-normal  justify-center items-center text-center mx-auto  md:gap-10 max-w-7xl"
    >
      <motion.div className="flex flex-col gap-3 items-center">
        <motion.h3 className="text-lg md:text-2xl font-bold  max-w-xl">
          <span className="uppercase tracking-[2px] text-gray-900">
            Front-end Developer
          </span>
        </motion.h3>
        <motion.h1 className="text-7xl font-bold  uppercase">
          <span className=" tracking-[1px]">
            <span className="">Pedro Felippe</span>
          </span>
        </motion.h1>

        <motion.h3 className="text-xl md:text-2xl font-thin flex flex-col max-w-sm xl:max-w-lg w-full text-gray-700 pb-2">
          Passion in create simple but powerful products.
        </motion.h3>
        {/* <motion.div className="flex max-md:flex-col items-center justify-center w-full max-md:space-y-4 md:space-x-4 max-w-sm">
          <ScrollLink
            className="w-full"
            activeClass="active"
            to="projects-container"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Button
              variant="outline"
              className=" py-6 text-md rounded-full w-full hover:underline transition-all hover:text-gray-300 "
            >
              Works
            </Button>
          </ScrollLink>

          <ScrollLink
            className="w-full"
            activeClass="active"
            to="contact-content"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="py-6 rounded-full border-0 text-md w-full  hover:underline transition-all hover:text-gray-300 ">
              Contact
            </Button>
          </ScrollLink>
        </motion.div> */}

        <motion.div className="flex items-center w-fit space-x-6 max-w-sm">
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-9 w-9  hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
