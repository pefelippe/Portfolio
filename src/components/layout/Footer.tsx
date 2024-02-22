import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="fixed bottom-0  w-full font-light mx-auto  text-white 
   text-base  justify-center items-center px-6  flex"
    >
      <div className="mx-auto flex w-full flex-col gap-10 max-w-7xl  items-center justify-center ">
        <motion.div
          className="flex  h-full justify-center p-6 rounded-t-xl
            items-center w-fit lg:w-screen space-x-6 lg:justify-between "
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
