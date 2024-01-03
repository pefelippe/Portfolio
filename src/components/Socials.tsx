import { motion } from "framer-motion";
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

import AnimatedBtn from "./animated/AnimatedBtn";

function Links() {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="w-fit flex  items-center  justify-center gap-6 "
    >
      <AnimatedBtn
        className="rounded-full   font-semibold "
        target="_blank"
        href="https://github.com/pefelippe"
      >
        <FaGithub className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-full  font-semibold "
        target="_blank"
        href="https://www.linkedin.com/in/pedro-felippe/"
      >
        <FaLinkedin className="headerSocial" />
      </AnimatedBtn>

      <AnimatedBtn
        className="rounded-full  font-semibold"
        target="_blank"
        href="https://www.canva.com/design/DAF4ag89vUY/gjr8C6XNtvnagWcuDl5bzQ/edit?utm_content=DAF4ag89vUY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
      >
        <FaFilePdf className="headerSocial" />
      </AnimatedBtn>
    </motion.div>
  );
}

export default Links;
