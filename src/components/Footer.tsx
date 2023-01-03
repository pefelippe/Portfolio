import Link from "next/link";
import Links from "./Links";
import SocialIcons from "./SocialIcons";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-[#080808] text-[#FFFFFFDE] px-10">
      <div className="max-w-7xl mx-auto  divide-y-4 ">
        <nav className="mx-auto flex items-center justify-between py-8 ">
          <div>
            <Link href="#hero">
              <span className="logoBtn flex hover:text-[#a7a7a7] ">
                <p className="animate-pulse">_</p>pedrofelippe
              </span>
            </Link>
          </div>

          <Links />
        </nav>
        <div className="flex  justify-between items-center snap-center py-8">
          <span className="flex text-sm xl:text-base">
            Copyright © 2022 Pedro Felippe.
          </span>

          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
