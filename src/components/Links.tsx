import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-fit flex  items-center  justify-center gap-8 text-[#001514] "
    >
      <AnimatedBtn
        className="rounded-md   font-semibold "
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md  font-semibold "
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-md  font-semibold"
        target="_blank"
        href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0/edit?usp=sharing"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </motion.div>
  );
}

export default Links;
