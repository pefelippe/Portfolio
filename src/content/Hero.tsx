/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import AnimatedBtn from "../components/animated/AnimatedBtn";
import { Button } from "../components/ui/button";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern text-white min-h-[40vh] flex justify-center max-lg:text-center max-lg:items-center gap-3"
    >
      <span className="text-3xl">Hello! 👋 My name is</span>
      <p className="text-6xl lg:text-[96px] tracking-wide font-extrabold  text-yellow-400">
        Pedro Felippe
      </p>
      <span className="text-2xl text-gray-50 pb-4">
        I create simple and efficient solutions for web.
      </span>

      <motion.div
        className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
      >
        {/* <ScrollLink to="/projects-container"> */}
        {/* <AnimatedBtn
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <Button className="py-7 px-8 text-xl " variant={"destructive"}>
            See my Work
          </Button>
        </AnimatedBtn> */}
        {/* </ScrollLink> */}
        <AnimatedBtn
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
        >
          <LinkedinIcon className="h-9 w-9" />
        </AnimatedBtn>

        <AnimatedBtn href="https://github.com/pefelippe">
          <GitHubLogoIcon className="h-9 w-9" />
        </AnimatedBtn>
      </motion.div>
    </motion.div>
  );
}

{
  /* <motion.img
          src="./assets/avatar-pdr.png"
          className="md:w-[300px] rounded-full max-md:object-cover object-fit  "
        /> */
}
