import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-24 w-screen font-light items-center mx-auto bg-[#101010]
       text-white flex flex-col  border-t text-md  justify-center max-xl:px-6 lg:grid-cols-4 gap-4 "
    >
      <p className="text-md lg:text-xl font-normal tracking-tighter">
        Pedro Felippe © {year}. All rights reserved.
      </p>
      {/* <Links /> */}
    </motion.footer>
  );
}

export default Footer;
