import logo from './logo.svg';
import './App.css';

import React from "react";
import Checklist from "./components/Checklist";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <Checklist />
    </div>
  );
}

export default App;
