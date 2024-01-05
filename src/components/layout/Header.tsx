import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "../ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex w-screen fixed rounded-sm bg-white z-40  mx-auto h-24 py-4 "
    >
      <div className="flex w-full  mx-auto items-center justify-between max-md:px-6 max-w-7xl">
        <Link href="/">
          <p className="text-3xl font-bold tracking-tighter">pedro.felippe</p>
        </Link>

        <div className="flex gap-2">
          <Button variant='outline' className="w-full py-6 text-lg font-medium hover:underline">
            <Link target="_blank" href="https://www.linkedin.com/in/pedro-felippe/">
              <FaLinkedin className="h-6 w-6"/>
            </Link>
          </Button>
          <Button variant='outline' className="w-full py-6 text-lg font-medium hover:underline">
            <Link target="_blank" href="https://github.com/pefelippe">
              <FaGithub className="h-6 w-6"/>
            </Link>
          </Button>
          <Button className="w-full py-6 px-9 text-lg font-medium hover:underline">
            <Link href="/contact">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
