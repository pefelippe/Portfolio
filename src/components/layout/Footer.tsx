import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" font-light mx-auto  text-white  bg-[#121212]
   text-base justify-center items-center flex h-56 p-10 text-center"
    >
      <motion.div className="flex flex-col gap-3 text-gray-200 font-light">
        <span className="text-xl"> Pedro Felippe © {year}</span>
        <motion.div
          className="flex  h-full justify-center pt-2
            items-center w-fit  space-x-5 mx-auto "
        >
          <AnimatedBtn
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
          >
            <LinkedinIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>

          <AnimatedBtn href="https://github.com/pefelippe">
            <GitHubLogoIcon className="h-7 w-7 hover:text-blue" />
          </AnimatedBtn>
        </motion.div>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
