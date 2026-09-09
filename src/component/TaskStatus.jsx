const TaskStatus = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-dark mb-4">Task Status</p>
      <div className="bg-white p-4 rounded shadow-lg">
        <p className="text-lg font-medium pb-4">
          Payment Failed - Card Declined
        </p>
        <button className="bg-[#02A53B] text-white rounded px-4 py-3 w-full font-semibold">
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;
