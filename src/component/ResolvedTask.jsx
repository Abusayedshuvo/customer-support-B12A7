const ResolvedTask = ({ resolveList }) => {
  return (
    <div className="mt-10">
      <p className="text-2xl font-semibold text-dark mb-4">Resolved Task</p>
      {resolveList.map((item) => (
        <div key={item.id} className="bg-[#E0E7FF] p-4 rounded shadow-lg mb-5">
          <p className="text-lg font-medium "> {item.title} </p>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTask;
