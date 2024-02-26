import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" mx-auto h-[10vh]
   text-base font-semibold justify-center items-center flex   text-center"
    >
      <p>© {year} - Pedro Felippe </p>
    </motion.footer>
  );
}

export default Footer;
