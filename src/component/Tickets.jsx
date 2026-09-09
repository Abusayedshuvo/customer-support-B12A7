import calender from "../assets/calender.svg";
const Tickets = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-dark mb-4">Customer Tickets</p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-white p-4 rounded shadow-lg">
          <div className="flex justify-between">
            <p className="text-lg font-medium text-black">
              Login Issues - Can't Access Account
            </p>
            <span className="bg-[#B9F8CF] px-3 py-1 rounded-full font-medium text-base text-[#0B5E06] inline-flex gap-2 items-center">
              <span className="bg-[#02A53B] w-4 h-4 rounded-full inline-block"></span>
              Open
            </span>
          </div>
          <p className="mt-2 mb-4 text-[#627382]">
            Customer is unable to log in to their account. They've tried
            resetting their password multiple times but still...
          </p>
          <div className="flex justify-between">
            <div className="flex gap-3 font-medium text-sm">
              <span className="text-[#627382] ">#1001</span>
              <span className="text-[#F83044]">HIGH PRIORITY</span>
            </div>
            <div className="flex gap-3 font-medium text-sm">
              <span className="text-[#627382] ">John Smith</span>
              <img src={calender} alt="" />
              <span className="text-[#627382] ">1/15/2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
