type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-[#080808] text-[#FFFFFFDE] px-10">
      <div className="max-w-7xl mx-auto  divide-y-4 ">
        <div className="flex  justify-center items-center snap-center py-8">
          <span className="flex text-sm xl:text-base">
            Copyright © 2022 Pedro Felippe.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
