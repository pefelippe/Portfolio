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
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern gap-6 xl:gap-20 justify-start text-start items-center lg:flex-row min-h-screen"
    >
      <motion.img
        src="./assets/avatar-pdr.png"
        className="max-h-[350px]  h-full lg:min-h-[400px] xl:min-h-[500px] rounded-md  object-cover  max-lg:hidden "
      />
      <div className="flex flex-col gap-8 justify-start h-full my-auto items-start max-w-4xl max-sm:max-w-md">
        <p className="max-sm:text-5xl text-6xl lg:text-7xl font-bold text-blue tracking-tight">
          Experience developing robust and responsive web applications.
        </p>
        <span className="text-2xl font-normal max-w-2xl">
          I am Pedro Felippe, a Web Developer based in Brazil.
        </span>

        <motion.div
          className="flex justify-start max-sm:flex-col max-sm:gap-8 relative w-full
            items-start sm:space-x-8 "
        >
          <ScrollLink to="contact-content" offset={-50}>
            <Button className="text-xl py-7 px-12 rounded items-center gap-1 max-sm:px-52 max-sm:max-w-md">
              Get in contact
            </Button>
          </ScrollLink>

          <ScrollLink to="projects-container" offset={-100}>
            <Button
              variant="outline"
              className="text-xl py-7 px-12 rounded items-center gap-1 max-sm:w-full text-[#101010] max-sm:px-52 max-sm:max-w-md"
            >
              See my work
            </Button>
          </ScrollLink>
        </motion.div>
      </div>
    </motion.div>
  );
}
