import shape1 from "../assets/shape1.png";
import shape2 from "../assets/shape2.png";

const StatusCard = ({ task, resolveList }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 container  mx-auto py-20">
      <div className="card-one bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-10 py-16 rounded-lg text-white text-center relative">
        <p className="text-2xl">In-Progress</p>
        <p className="font-semibold text-6xl mt-4"> {task.length} </p>
        <img className="absolute top-0 left-0" src={shape1} alt="" />
        <img className="absolute top-0 right-0" src={shape2} alt="" />
      </div>
      <div className="card-one bg-linear-to-r from-[#54CF68] to-[#00827A] px-10 py-16 rounded-lg text-white text-center">
        <p className="text-2xl">Resolved</p>
        <p className="font-semibold text-6xl mt-4"> {resolveList.length} </p>
      </div>
    </div>
  );
};

export default StatusCard;
