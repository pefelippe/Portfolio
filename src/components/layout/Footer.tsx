import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="fixed bottom-0 font-light mx-auto  text-white 
   text-base justify-center items-center flex"
    >
      <motion.div
        className="flex flex-col h-full justify-center p-6 rounded-t-xl
            items-center w-fit  space-y-5 lg:justify-between "
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
    </motion.footer>
  );
}

export default Footer;
