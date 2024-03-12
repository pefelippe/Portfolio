import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { LinkedinIcon } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <motion.footer
      className=" py-10 gap-4 flex-col border-t border-gray-300 px-6  mx-auto text-gray-800
   text-base font-normal justify-center items-center flex   text-center section max-w-5xl"
    >
      <p>© {year} - Pedro Felippe </p>
      {/* <div className="flex gap-5">
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/pedro-felippe/"
          className={`tracking-wide hover:text-blue`}
        >
          <p>Linkedin</p>
        </Link>
        <Link
          target="_blank"
          href="https://github.com/pefelippe"
          className={`tracking-wide hover:text-blue`}
        >
          <p>Github</p>
        </Link>
      </div>{" "} */}
    </motion.footer>
  );
}

export default Footer;
