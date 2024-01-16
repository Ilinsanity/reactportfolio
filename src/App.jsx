import "./App.css";
import React, { useState } from "react";

function App() {
  const [screen, setscreen] = useState({ top: 0, left: 0 });
  return (
    <div className="">
      <div className="w-screen h-screen bg-mountainwosky bg-cover bg-center absolute z-30 top-0 "></div>
      <div className="w-screen h-screen flex flex-col justify-center items-center  z-20 relative ">
        <p className="text-9xl name text-gold ">Issac</p>
        <p className="text-9xl name text-gold ">Lin</p>
      </div>

      <div className="w-screen h-screen bg-mountainrange bg-cover bg-center absolute z-10 top-0 bg-fixed"></div>
      <div className="w-screen h-screen bg-white"></div>
    </div>
  );
}

export default App;
