import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" bottom-0  w-full font-light mx-auto  text-white bg-gray-900 
   text-base  justify-center items-center px-6  flex"
    >
      <div className="mx-auto flex w-full flex-col gap-10 max-w-7xl  items-center justify-center ">
        <motion.div
          className="flex  h-full justify-center bg-gray-900 p-3 rounded-t-xl
            items-center w-fit space-x-6"
        >
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
      </div>
    </motion.footer>
  );
}

export default Footer;
