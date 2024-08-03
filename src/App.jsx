import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
