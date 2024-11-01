import React from "react";
import "./index.css";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <section>
      <NavBar />
      <div className="bg-gray-100 min-h-screen p-8">
        <Dashboard />
      </div>
    </section>
  );
};

export default App;
