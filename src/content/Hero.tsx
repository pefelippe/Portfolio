import { GitHubLogoIcon } from "@radix-ui/react-icons";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../components/animated/AnimatedBtn";

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
        className="flex flex-col gap-4 justify-start h-full my-auto items-center  max-sm:max-w-md uppercase text-white font-extrabold"
      >
        <span className=" text-2xl lg:text-4xl  flex gap-3 ">
          <motion.img
            src="https://github.com/tairosonloa/tairosonloa/raw/main/assets/wave.gif?raw=true"
            width="35px"
          />{" "}
          Hey. I'm Pedro.
        </span>
        <p className="text-6xl md:text-[100px] xl:text-[150px] font-extrabold  text-blue tracking-normal leading-[1.1]">
          A Software Engineer
        </p>

        <span className="text-2xl text-gray-300 tracking-[2px]">
          I build things for the web.
        </span>
      </motion.div>
    </motion.div>
  );
}
