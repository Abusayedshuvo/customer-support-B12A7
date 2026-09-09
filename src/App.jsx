import { Suspense, use, useState } from "react";

import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ResolvedTask from "./component/ResolvedTask";
import StatusCard from "./component/StatusCard";
import TaskStatus from "./component/TaskStatus";
import Tickets from "./component/Tickets";
import { ToastContainer } from "react-toastify";

const loadData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const loadPromise = loadData();

function App() {
  const [task, setTask] = useState([]);
  const [resolveList, setResolveList] = useState([]);
  const data = use(loadPromise);
  const [filterData, setFilterData] = useState(data);

  return (
    <>
      <Navbar></Navbar>
      <StatusCard task={task} resolveList={resolveList}></StatusCard>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto pb-20">
        <div className="col-span-2">
          <Suspense>
            <Tickets
              filterData={filterData}
              task={task}
              setTask={setTask}
            ></Tickets>
          </Suspense>
        </div>
        <div className="col-span-1">
          <TaskStatus
            task={task}
            setTask={setTask}
            resolveList={resolveList}
            setResolveList={setResolveList}
            filterData={filterData}
            setFilterData={setFilterData}
          ></TaskStatus>
          <ResolvedTask resolveList={resolveList}></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
