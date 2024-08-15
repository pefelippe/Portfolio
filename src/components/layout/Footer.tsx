import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer className="py-5 md:px-8 md:py-0 ">
      <div className="flex flex-col items-center justify-center max-w-5xl gap-4 mx-auto md:h-24 md:flex-row border-t-[1px]   text-[#101010]">
        <p className="text-center tracking-tighter- text-md ">
          Pedro Felippe © 2024
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
