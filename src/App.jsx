import "./App.css";
import React, { useState } from "react";

function App() {
  const [screen, setscreen] = useState({ top: 0, left: 0 });
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}

export default App;
