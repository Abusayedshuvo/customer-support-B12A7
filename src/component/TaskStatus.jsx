import { toast } from "react-toastify";

const TaskStatus = ({
  task,
  setTask,
  resolveList,
  setResolveList,
  filterData,
  setFilterData,
}) => {
  const handleComplete = (item) => {
    const remainTask = task.filter((ticket) => ticket.id !== item.id);
    setTask(remainTask);

    const newResolves = [...resolveList, item];
    setResolveList(newResolves);

    const filterTickets = filterData.filter((ticket) => ticket.id !== item.id);
    setFilterData(filterTickets);

    toast("Task Complete", {
      autoClose: 1500,
    });
  };
  return (
    <div>
      <p className="text-2xl font-semibold text-dark mb-4">Task Status</p>
      {task.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded shadow-lg mb-5">
          <p className="text-lg font-medium pb-4">{item.title}</p>
          <button
            onClick={() => handleComplete(item)}
            className="bg-[#02A53B] text-white rounded px-4 py-3 w-full font-semibold cursor-pointer"
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
