import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";
import { Logo } from "./Header";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" w-full font-light mx-auto  text-zinc-900 bg-zinc-100 
   text-lg  justify-center items-center px-6  flex  h-16"
    >
      <div className="mx-auto flex  w-full flex-col  gap-8 max-w-7xl">
        <div className="flex items-start justify-start font-medium">
          <span>Pedro Felippe - © {year}</span>

          {/* <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-4 max-w-sm"
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-6 w-6" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-6 w-6" />
            </AnimatedBtn>
          </motion.div> */}
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
