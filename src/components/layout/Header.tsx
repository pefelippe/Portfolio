import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import SocialLinks from "../SocialLinks";

const Navbar = () => {
  return (
    <motion.nav
      className="font-semibold  w-full mx-auto h-[10vh] max-lg:px-8 max-w-5xl
       flex items-center  text-[#000] bg-[#fff]"
    >
      <div className="w-full flex  justify-between items-center">
        <Link href="/">
          <h3 className="font-bold text-[#2d2e32] text-2xl hover:text-gray-500 transition-all">
            Pedro Felippe
          </h3>
        </Link>
        <SocialLinks />
      </div>
      {/*<motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" h-full flex items-center w-full justify-center "
      >
         <div className="max-md:hidden list-none text-gray-300 text-xl  flex items-center gap-8 ">
          {navLinks.map((navLink) => {
            return (
              <li
                key={navLink.id}
                className={` py-3  ${
                  id === navLink.title
                    ? "bg-blue hover:text-white rounded-full"
                    : " text-secondary hover:text-blue"
                }`}
              >
                <Link
                  className="rounded-xl p-2 cursor-pointer  hover:bg-blue hover:text-white transition-all"
                  href={`${navLink.id}`}
     
                >
                  {navLink.title}
                </Link>
              </li>
            );
          })}
        </div> 

      </motion.div>*/}
    </motion.nav>
  );
};

export default Navbar;
