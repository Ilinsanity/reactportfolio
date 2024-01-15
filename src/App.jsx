import "./App.css";
import React, { useState } from "react";

function App() {
  const [screen, setscreen] = useState({ top: 0, left: 0 });
  return (
    <div className="w-screen h-screen bg-mountainrange bg-cover bg-center">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <p className="text-8xl name text-white">Issac</p>
        <p className="text-8xl name text-white">Lin</p>
      </div>
    </div>
  );
}

export default App;
