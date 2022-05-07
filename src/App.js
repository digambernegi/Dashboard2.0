import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Right from "./components/right/Right";

function App() {
  return (
    <div className="app">
      <div className="grid">
        <Sidebar />
        <Dashboard />
        <Right />
      </div>
    </div>
  );
}

export default App;
