import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import LinksToPages from "../LinksToPages";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" py-10 gap-7 flex-col border-t border-gray-700  mx-auto text-gray-300
   text-md font-medium justify-center items-center flex   text-center section max-w-screen-2xl"
    >
      <LinksToPages />
      <p>Designed & developed by Pedro Felippe - {year}</p>

      <motion.div
        className="flex justify-center
        items-center w-fit space-x-8 text-base tracking-widest"
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
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
