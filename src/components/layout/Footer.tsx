import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-20  text-white h-[15vh]  bg-[#121212]
     items-center  flex mx-auto  max-xl:px-6 text-base font-normal justify-center "
    >
      <div className="flex text-center items-center max-w-5xl justify-center mx-auto w-full">
        <p className=" text-lg font-extralight text-[#A1A1AA]">
          Created by <span className="text-[#e4e4e7]">Pedro Felippe</span> - ©{" "}
          {year}{" "}
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
