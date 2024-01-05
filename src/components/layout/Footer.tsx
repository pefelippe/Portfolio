import { motion } from "framer-motion";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="z-40 h-24 w-screen font-extralight items-center   mx-auto  text-[#101010]  flex flex-col max-w-5xl
     text-lg  justify-center max-xl:px-6 lg:grid-cols-4 gap-4 "
    >
      <p className="text-xl font-medium tracking-tighter">Pedro Felippe © {year}. All rights reserved.</p>
      {/* <Links /> */}
    </motion.footer>
  );
}

export default Footer;
