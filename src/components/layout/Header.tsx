import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="flex w-full fixed rounded-sm bg-white z-40 h-24 py-4 left-0 right-0 "
    >
      <div className="flex w-full  mx-auto items-center justify-between max-xl:px-6 max-w-5xl">
        <Link href="/">
          <p className="text-3xl font-bold tracking-tighter">pedro.felippe</p>
        </Link>

        <div className="flex gap-2">

          <Button className="w-full py-6 px-9 text-lg font-medium hover:underline max-md:hidden">
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
