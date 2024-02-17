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
      className="content-intern text-white min-h-[20vh]  justify-center text-center items-center gap-3"
    >
      {/* <motion.img
        src="./assets/avatar-pdr.png"
        className="md:w-[150px] rounded-full max-md:object-cover object-fit  "
      /> */}

      <p className="text-6xl lg:text-[96px] tracking-wide font-extrabold  text-yellow-400">
        Pedro Felippe
      </p>
      <span className="text-2xl text-gray-50 pb-4">
        I create simple and efficient solutions for web.
      </span>
    </motion.div>
  );
}
