import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer className="text-[#8d8d99]  ">
      <div className="w-full max-w-7xl justify-center items-start mx-auto  flex py-5">
        <p className="flex text-lg font-extralight">Pedro Felippe © {year}</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
