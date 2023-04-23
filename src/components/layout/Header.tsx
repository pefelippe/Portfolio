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
      className="font-semibold  w-full mx-auto h-[10vh]
       flex items-center snap-start text-[#000] bg-[#fff] shadow-sm"
    >
      <div className="flex max-w-4xl mx-auto justify-between w-full max-xl:px-6">
        <Link href="/">
          <h3 className="font-bold text-[#2d2e32] text-2xl">
            PedroFelippe.dev
          </h3>
        </Link>
        {/* <SocialLinks /> */}
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
