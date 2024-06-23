import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";

import AboutSection from "../../sections/AboutSection";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" flex-col mx-auto text-gray-300 w-screen  bg-[#101010]
   text-md font-medium justify-center items-center flex   text-center "
    >
      {/* <LinksToPages /> */}

      {/* <motion.div
          className="flex items-center justify-center space-x-8 text-base tracking-widest w-fit"
        >
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/pedro-felippe/"
            className={`tracking-wide hover:text-blue`}
          >
            <Linkedin className="h-7 w-7" />
          </Link>

          <Link
            target="_blank"
            href="https://github.com/pefelippe"
            className={`tracking-wide hover:text-blue`}
          >
            <GithubIcon className="h-7 w-7" />
          </Link>
        </motion.div> */}

      {/* <div className="w-full border-t flex items-center justify-center border-[#666] py-6">
        <p className="text-[#666] text-sm">
          Designed & developed by Pedro Felippe - {year}
        </p>
      </div> */}
    </motion.footer>
  );
}

export default Footer;
