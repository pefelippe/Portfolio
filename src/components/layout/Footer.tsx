import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-20  text-white py-[72px] max-w-5xl
     items-center  flex mx-auto  max-xl:px-6 text-base font-normal justify-between "
    >
      <div className="flex text-center items-center max-w-5xl justify-between mx-auto w-full">
        <p className=" text-lg font-extralight text-[#A1A1AA]">
          Created by <span className="text-[#e4e4e7]">Pedro Felippe</span> - ©{" "}
          {year}{" "}
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
