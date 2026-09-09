const Footer = () => {
  return (
    <div className="bg-[#000] py-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 container mx-auto">
        <div className="col-span-2">
          <p className="text-white text-2xl font-bold mb-4">
            CS — Ticket System
          </p>
          <p className="text-[#A1A1AA] leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="ps-10">
          <p className="text-white text-xl font-medium mb-4">Company</p>
          <ul className="text-[#A1A1AA] space-y-4">
            <li>
              <a href="#"> About Us </a>
            </li>
            <li>
              <a href="#"> Our Mission </a>
            </li>
            <li>
              <a href="#"> Contact Saled </a>
            </li>
          </ul>
        </div>
        <div className="ps-10">
          <p className="text-white text-xl font-medium mb-4">Services</p>
          <ul className="text-[#A1A1AA] space-y-4">
            <li>
              <a href="#"> Products & Services </a>
            </li>
            <li>
              <a href="#"> Customer Stories </a>
            </li>
            <li>
              <a href="#"> Download Apps </a>
            </li>
          </ul>
        </div>
        <div className="ps-10">
          <p className="text-white text-xl font-medium mb-4">Information</p>
          <ul className="text-[#A1A1AA] space-y-4">
            <li>
              <a href="#"> Privacy Policy </a>
            </li>
            <li>
              <a href="#"> Terms & Conditions </a>
            </li>
            <li>
              <a href="#"> Join Us </a>
            </li>
          </ul>
        </div>
        <div className="ps-10">
          <p className="text-white text-xl font-medium mb-4">Social Links</p>
          <ul className="text-[#A1A1AA] space-y-4">
            <li>
              <a href="#"> @CS — Ticket System </a>
            </li>
            <li>
              <a href="#"> @CS — Ticket System </a>
            </li>
            <li>
              <a href="#"> @CS — Ticket System </a>
            </li>
            <li>
              <a href="#"> support@cst.com </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-4 mb-8" />
      <p className="text-center text-[#FAFAFA]">
        © 2026 CS — Ticket System. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
