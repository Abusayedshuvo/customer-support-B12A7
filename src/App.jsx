import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ResolvedTask from "./component/ResolvedTask";
import StatusCard from "./component/StatusCard";
import TaskStatus from "./component/TaskStatus";
import Tickets from "./component/Tickets";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <StatusCard></StatusCard>
      <div className="grid grid-cols-1 lg:grid-cols-3 container mx-auto pb-20">
        <div className="col-span-2">
          <Tickets></Tickets>
        </div>
        <div className="col-span-1">
          <TaskStatus></TaskStatus>
          <ResolvedTask></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
