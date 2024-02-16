/* eslint-disable react/no-unescaped-entities */
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { File, LinkedinIcon } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      id="about-content"
      className="content-intern gap-8 h-full flex flex-col items-start justify-center w-full z-20   mx-auto "
    >
      <motion.img
        src="./assets/pedrof.jpg"
        className=" max-w-[600px] rounded-3xl 
            max-md:object-cover object-fit  "
      />
    </motion.div>
  );
}
