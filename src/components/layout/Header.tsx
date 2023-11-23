import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full   z-40 backdrop bg-white  shadow  text-[#222222] h-[72px] ">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between max-xl:px-6">
        <Link href="/#">
          <p className=" text-xl text-[#2E2E2E] font-bold">Pedro Felippe</p>
        </Link>

        <div className="relative flex items-center  justify-between  ">
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
            className={`absolute right-0 z-40 top-10 max-lg:h-screen max-lg:w-screen items-center
             text-[#242424]  py-20 max-lg:bg-[#fff] 
            rounded-lg shadow dark:bg-dark-2 flex flex-col gap-20 text-center 
            lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
              !open && "hidden"
            } `}
          >
            <ul className=" flex max-lg:flex-col w-fit max-lg:gap-32 max-lg:items-center text-lg font-medium py-4 gap-8">
              <Link
                onClick={() => setOpen(!open)}
                href="/about"
                className="hover:underline  "
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
                className="hover:underline "
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
