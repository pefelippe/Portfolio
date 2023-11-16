import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-20  text-white h-[10vh]   shadow-xs shadow-gray-300
     items-center  flex mx-auto  text-base font-normal justify-center "
    >
      <div className="flex text-center items-center max-w-xl justify-start mx-auto w-full  px-6">
        <p className=" text-lg font-extralight text-[#A1A1AA]">
          Created by <span className="text-[##E6AF2E]">Pedro Felippe</span> - ©{" "}
          {year}{" "}
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
