import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = () => {
    return (
      <>
        <Link
          onClick={() => setOpen(!open)}
          href="/about"
          className="hover:underline "
        >
          About
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          target="_blank"
          href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0"
          className="hover:underline"
        >
          Resume
        </Link>
        <Link
          onClick={() => setOpen(!open)}
          href="/contact"
          className="hover:underline"
        >
          <p className="">Contact</p>
        </Link>
      </>
    );
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex w-screen fixed border-b border-r border-l rounded-sm z-40 backdrop bg-white mx-auto
         text-[#101010] h-[88px]  top-0 left-0 right-[10]"
    >
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between max-lg:px-6">
        <Link href="/#">
          <p className=" text-[24px]  font-bold">Pedro Felippe</p>
        </Link>

        <div className="flex items-center text-[18px] font-medium py-5 gap-8">
          <Links />
        </div>

        <div className="relative  items-center  justify-between  hidden">
          <button
            onClick={() => setOpen(!open)}
            id="navbarToggler"
            className={` ${
              open && "navbarTogglerActive border-2"
            } absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary
            focus:ring-2 lg:hidden  border-[#242424]`}
          >
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
          </button>
          <nav
            id="navbarCollapse"
            className={`absolute right-0 z-40 top-10 px-40 items-center  bg-white  w-full 
            rounded-lg shadow border flex flex-col gap-20 text-center  h-fit   justify-evenly
            text-[24px]  font-medium  py-10 
              ${!open && "hidden"} `}
          >
            <Links />
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
