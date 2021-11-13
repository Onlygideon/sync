import Metrics from "./components/Metrics";
import Sidebar from "./components/Sidebar";
import "./css/index.css"



function App() {
  return (
    <div className="panel">
        <Sidebar />
        <Metrics />
    </div>
  );
}

export default App;
