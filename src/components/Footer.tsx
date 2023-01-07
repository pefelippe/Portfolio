type Props = {};

function Footer({}: Props) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#151515] text-[#FFFFFFDE] px-8 py-4">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-center py-4">
          <span className="flex text-sm xl:text-base">
            Copyright © {year} Pedro Felippe.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
