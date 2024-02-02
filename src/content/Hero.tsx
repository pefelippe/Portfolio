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
      id="hero-container"
      className="content-intern relative w-full justify-between items-start text-center lg:text-start gap-4  mx-auto flex-row "
    >
      <motion.div className="flex flex-col font-sans font-bold max-w-2xl gap-3 lg:gap-5">
        <p className="text-5xl lg:text-7xl tracking-tighter">
          {" "}
          Pedro Felippe <br />
          Frontend Developer
        </p>

        <p className="text-xl lg:text-2xl font-light text-gray-700">
          Solving complex problems with simple solutions.
        </p>

        <div className="flex w-fit items-center gap-6 justify-center max-lg:mx-auto">
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-9 w-9 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-9 w-9 hover:text-blue" />
          </AnimatedBtn>
        </div>
      </motion.div>
      {/* <motion.img
        src="./assets/avatar-pdr.png"
        className="rounded-md border-2 shadow w-[300px] "
      /> */}
    </motion.div>
  );
}
