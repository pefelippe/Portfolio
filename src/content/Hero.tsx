/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import { Link as ScrollLink } from "react-scroll";
import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      className="flex text-[#fdfdff] relative 
     w-full max-md:flex-col  justify-start items-center 
      text-start  max-w-3xl max-xl:px-6  mx-auto py-10  gap-10"
    >
      <motion.img
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75, delay: 1 }}
        src="/assets/avatar-pdr.png"
        alt="pedro felippe"
        className="max-md:hidden h-full md:max-w-[250px] md:max-h-[250px] rounded-md "
      />
      <motion.div className="flex justify-center flex-col h-full  items-start gap-4  z-30  w-full ">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-6xl font-bold tracking-normal max-w-lg"
        >
          <span className="">Pedro Felippe</span>
        </motion.h1>

        <motion.h3
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className=" text-xl font-thin flex flex-col max-w-sm w-full  pb-1 text-gray-300"
        >
          A Full-Stack Web Developer based in Brazil. I create amazing products
          and solve problems.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center w-fit space-x-4 max-w-sm"
        >
          <ScrollLink
            activeClass="active"
            to="contact-content"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <Button className="px-8 py-6 text-2xl border-0 text-md hover:underline transition-all hover:text-gray-300 ">
              <p className="text-lg">Contact</p>
            </Button>
          </ScrollLink>
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-8 w-8 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex max-lg:flex-col max-lg:space-y-4 lg:space-x-4 w-full items-center max-w-sm text-[#fdfdff] "
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
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
}
