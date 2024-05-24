import "./App.css";

import React, { useState } from "react";
import Aboutme from "./aboutme.jsx";
function App() {
  const [screen, setscreen] = useState({ top: 0, left: 0 });
  return (
    <div className="">
      <div className="w-screen h-screen flex items-center justify-end bg-mountainwosky bg-cover bg-center absolute z-30 top-0 ">
        <div className="w-max h-max mr-5 flex flex-col">
          <button className="navname">
            <h1 className=" uppercase text-gold text-4xl rounded p-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black">
              About Me
            </h1>
          </button>
          <button className="navname">
            <h1 className=" uppercase text-gold text-4xl rounded p-4 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black">
              Projects
            </h1>
          </button>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col justify-center items-center  z-20 relative ">
        <p className="text-9xl name text-gold ">Issac</p>
        <p className="text-9xl name text-gold ">Lin</p>
        {/* <p className="text-4xl text-gold"> Now this is Epic</p> */}
      </div>

      <div className="w-screen h-screen bg-mountainrange bg-cover bg-center absolute z-10 top-0 bg-fixed"></div>
      <Aboutme />
    </div>
  );
}

export default App;
