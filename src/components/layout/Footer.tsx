import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="text-[#8d8d99] gap-6 justify-center items-center  bg-clip-border bg-transparent  shadow-none 
      overflow-hidden  border-blue-gray-50 transition-colors duration-300 hover:border-blue-gray-100 h-[10vh]
    font-thin text-sm md:text-md  mx-auto   flex   w-screen flex-col  mr-[15.5px]"
    >
      <div className="w-full max-w-7xl justify-center items-start mx-auto  flex">
        <p className="flex text-lg">Pedro Felippe © {year}</p>
      </div>
    </motion.footer>
  );
}

export default Footer;
