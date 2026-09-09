import calender from "../assets/calender.svg";
import { toast } from "react-toastify";

const Tickets = ({ filterData, task, setTask }) => {
  const handleTask = (ticket) => {
    const newTask = [...task, ticket];
    setTask(newTask);
    toast("Task is added", {
      autoClose: 2000,
    });
  };

  return (
    <div>
      <p className="text-2xl font-semibold text-dark mb-4">Customer Tickets</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filterData.map((ticket) => (
          <div
            onClick={() => handleTask(ticket)}
            key={ticket.id}
            className="bg-white p-4 rounded shadow-lg  flex flex-col justify-between cursor-pointer"
          >
            <div className="flex justify-between">
              <p className="text-lg font-medium text-black">{ticket.title}</p>
              {ticket.status === "Open" ? (
                <span className="bg-[#B9F8CF] px-3 py-1 rounded-full font-medium text-base text-[#0B5E06] inline-flex gap-2 items-center h-8">
                  <span className="bg-[#02A53B] w-4 h-4 rounded-full inline-block"></span>
                  Open
                </span>
              ) : (
                <span className="bg-[#F8F3B9] px-3 py-1 rounded-full font-medium text-base text-[#9C7700] inline-flex gap-2 items-center whitespace-nowrap h-8">
                  <span className="bg-[#FEBB0C] w-4 h-4 rounded-full inline-block"></span>
                  In- Progress
                </span>
              )}
            </div>
            <p className="mt-2 mb-4 text-[#627382]">{ticket.description}</p>
            <div className="flex justify-between">
              <div className="flex gap-3 font-medium text-sm">
                <span className="text-[#627382] ">#{ticket.id}</span>
                {ticket.priority === "High" && (
                  <span className="text-[#F83044]">HIGH PRIORITY</span>
                )}
                {ticket.priority === "Medium" && (
                  <span className="text-[#FEBB0C]">MEDIUM PRIORITY</span>
                )}
                {ticket.priority === "Low" && (
                  <span className="text-[#02A53B]">LOW PRIORITY</span>
                )}
              </div>
              <div className="flex gap-3 font-medium text-sm">
                <span className="text-[#627382] ">{ticket.customer}</span>
                <img src={calender} alt="" />
                <span className="text-[#627382] ">{ticket.createdAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tickets;
