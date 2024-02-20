import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className=" w-full font-light mx-auto bg-white text-[#101010]  border-t
   text-base  justify-center items-center px-6  flex"
    >
      <div className="mx-auto flex w-full flex-col gap-8 max-w-7xl h-20 items-center justify-center">
        <span>Pedro Felippe - © {year}</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
