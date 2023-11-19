import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex w-full bg-[#121212] absolute z-20">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between">
        <Link href="/#" className="block w-full py-3">
          <p className="hidden dark:block w-60  text-white text-xl text-semibold">
            Pedro Felippe
          </p>
        </Link>

        <div className="relative flex items-center ml-auto justify-between px-4 text-white">
          <button
            onClick={() => setOpen(!open)}
            id="navbarToggler"
            className={` ${
              open && "navbarTogglerActive"
            } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
          >
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
            <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
          </button>
          <nav
            // :className="!navbarOpen && 'hidden' "
            id="navbarCollapse"
            className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
              !open && "hidden"
            } `}
          >
            <ul className="block lg:flex w-fit">
              <ListItem NavLink="/#">Home</ListItem>
              <ListItem NavLink="/#">Payment</ListItem>
              <ListItem NavLink="/#">About</ListItem>
              <ListItem NavLink="/#">Blog</ListItem>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-medium text-white hover:text-dark dark:text-dark-6 dark:hover:text-white lg:ml-12 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};
