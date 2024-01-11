import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";
import AnimatedBtn from "../animated/AnimatedBtn";
import { Logo } from "./Header";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" w-screen font-light items-start mx-auto bg-[#101010]
       text-white  flex-col h-fit  text-md  justify-start max-xl:px-6  flex "
    >
      <div className="max-w-7xl mx-auto flex w-full flex-col py-8 gap-8">
        <div className="flex flex-col gap-5">
          <Logo />
          <span className="flex max-w-md font-thin text-lg">
            Web Developer who loves to create amazing products and solve
            problems.
          </span>

          <motion.div
            className="flex  top-0 bottom-0 h-full justify-center 
         items-center w-fit space-x-6 max-w-sm"
          >
            <AnimatedBtn
              target="_blank"
              href="https://www.linkedin.com/in/pedro-felippe/"
            >
              <LinkedinIcon className="h-8 w-8" />
            </AnimatedBtn>

            <AnimatedBtn href="https://github.com/pefelippe">
              <GitHubLogoIcon className="h-8 w-8" />
            </AnimatedBtn>
          </motion.div>
        </div>

        <p className="text-sm mx-auto font-thinw w-full border-t pt-8">
          © Copyright {year}. Made by Pedro Felippe.
        </p>
      </div>
      {/* <Links /> */}
    </motion.footer>
  );
}

export default Footer;
