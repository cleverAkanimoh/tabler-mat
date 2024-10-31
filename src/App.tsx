import React from "react";
import "./index.css";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Dashboard />
    </div>
  );
};

export default App;
