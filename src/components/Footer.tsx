import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#151515] text-[#FFFFFFDE] px-8 py-4">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between py-4">
          <span className="flex text-sm xl:text-base">
            Copyright © {year} Pedro Felippe.
          </span>
          <nav className="flex justify-center items-center gap-5 ">
            <a href="#">
              <FaGithub className="socialMediaIcon" />
            </a>
            <a href="#">
              <FaLinkedinIn className="socialMediaIcon" />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
