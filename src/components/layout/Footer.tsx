import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";
import { Logo } from "./Header";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" w-full font-light items-start mx-auto bg-[#101010] border-t dark:bg-white dark:text-[#101010]
       text-white  flex-col h-fit  text-md  justify-start px-6  flex "
    >
      <div className="mx-auto flex  w-full flex-col py-8 gap-8 max-w-6xl">
        <div className="flex items-center justify-between ">
          <Logo />

          <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
            items-center w-fit space-x-6 max-w-sm"
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
          </motion.div>
        </div>

        <div className="text-sm mx-auto font-thin justify-center items-center text-center w-full border-t pt-8">
          <span>© Copyright {year}. Made by Pedro Felippe.</span>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
