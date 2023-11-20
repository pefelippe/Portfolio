import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full   z-40 backdrop bg-white  shadow h-[10vh] text-[#222222]  ">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between">
        <Link href="/#" className="block w-full py-3 pl-6">
          <p className="  text-[22px] font-semibold">Pedro Felippe</p>
        </Link>

        <div className="relative flex items-center  justify-between pr-6 ">
          <button
            onClick={() => setOpen(!open)}
            id="navbarToggler"
            className={` ${
              open && "navbarTogglerActive border-2"
            } absolute right-0 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary mx-6
            focus:ring-2 lg:hidden  border-[#242424]`}
          >
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
            <span className="relative my-[6px] block h-[4px] w-[30px] bg-[#222222] "></span>
          </button>
          <nav
            id="navbarCollapse"
            className={`absolute right-0 z-40 top-10 max-lg:h-screen max-lg:w-screen items-center
             text-[#242424]  py-20 max-lg:bg-[#fff] 
            rounded-lg shadow dark:bg-dark-2 flex flex-col gap-20 text-center 
            lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
              !open && "hidden"
            } `}
          >
            <ul className=" flex max-lg:flex-col w-fit gap-32 max-lg:items-center lg:gap-12">
              <Link
                onClick={() => setOpen(!open)}
                href="/about"
                className="flex py-2   lg:inline-flex font-medium text-lg max-lg:text-7xl"
              >
                About
              </Link>
              <Link
                onClick={() => setOpen(!open)}
                target="_blank"
                href="https://docs.google.com/document/d/1xl45doLPK-BEZ-yLpfr7KnODSTqEJWweH2MzCqTf1S0"
                className="flex py-2   lg:inline-flex font-medium text-lg max-lg:text-7xl"
              >
                Resume
              </Link>
              <Link
                onClick={() => setOpen(!open)}
                href="/contact"
                className="flex py-2   lg:inline-flex font-medium text-lg max-lg:text-7xl"
              >
                Contact
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
