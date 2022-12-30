type Props = {};

function Footer({}: Props) {
  return (
    <footer className="  bg-[#080808] text-[#FFFFFFDE]">
      <div className="w-full flex flex-col justify-around p-10  items-center snap-center  gap-10">
        <span className="flex text-sm xl:text-base">
          Copyright © 2022 Pedro Felippe.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
