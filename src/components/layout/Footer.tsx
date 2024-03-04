import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

import AnimatedBtn from "../animated/AnimatedBtn";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" mx-auto py-10 pt-20
   text-base font-medium justify-center items-center flex   text-center"
    >
      <p>© {year} - Pedro Felippe </p>
    </motion.footer>
  );
}

export default Footer;
