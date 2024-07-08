import { motion } from "framer-motion";
import { GithubIcon, Linkedin, LinkedinIcon } from "lucide-react";

function Footer() {
  return (
    <motion.footer className="py-5 md:px-8 md:py-0 border-t-[1px]  text-[#fff] bg-[#101010">
      <div className="flex flex-col items-center justify-between max-w-5xl gap-4 mx-auto md:h-24 md:flex-row">
        <p className="text-center tracking-tighter- text-md ">
          Pedro Felippe LTDA © 2024
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
