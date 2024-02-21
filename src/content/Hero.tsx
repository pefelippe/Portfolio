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
      className="content-intern justify-center text-center items-center lg:flex-row "
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="flex flex-col gap-4 justify-start h-full my-auto items-center max-w-4xl  max-sm:max-w-md uppercase text-white font-extrabold"
      >
        <span className=" text-3xl lg:text-4xl  flex gap-2 ">
          <motion.img
            src="https://github.com/tairosonloa/tairosonloa/raw/main/assets/wave.gif?raw=true"
            width="35px"
          />{" "}
          Hey. I'm a
        </span>
        <p className="text-6xl lg:text-[200px] font-extrabold  text-blue tracking-normal leading-[1.1]">
          Software Engineer
        </p>

        {/* <ScrollLink
          to="contact-content"
          offset={-50}
          className="max-sm:w-full pt-6"
        >
          <Button
            variant={"secondary"}
            className=" rounded items-center gap-2  max-sm:w-full  tracking-tighter uppercase "
          >
            Check my work
          </Button>
        </ScrollLink> */}
      </motion.div>
    </motion.div>
  );
}
