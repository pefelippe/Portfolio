import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { navLinks } from "../../constants";
import SocialLinks from "../SocialLinks";
import HamburgerMenu from "./../HamburgerMenu";

const Navbar = () => {
  const router = useRouter();

  return (
    <motion.nav
      className="font-semibold  w-full  justify-end max-w-4xl max-md:px-8 pt-8 mx-auto
       flex items-center snap-start text-[#000] bg-[#fff]"
    >
      <SocialLinks />
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
