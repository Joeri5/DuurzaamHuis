import { NextPage } from "next";
import React from "react";

type Props = {};

const Calculator: NextPage = (props: Props) => {
  return (
    <div className="p-5 grid grid-cols-2 gap-5">
      <div className="p-5 shadow-lg rounded-2xl">
        <div className="flex my-5 justify-between">
          <h2 className="">Calculate power usage cost</h2>
          <div className="flex bg-gray-200 rounded-xl">
            <button className="px-2 py-1 text-white bg-gray-400 rounded-xl">
              Annualy
            </button>
            <button className="px-2 py-1">Monthly</button>
          </div>
        </div>
        <div className="flex justify-between align-middle">
          <div>
            <p className="my-1">kWh usage</p>
            <input
              type="number"
              placeholder="kWh"
              className="border-2 border-black focus:outline-none"
            />
          </div>
          <div>
            <p className="my-1">kWh price</p>
            <input
              type="number"
              placeholder="€"
              className="border-2 border-black focus:outline-none"
            />
          </div>
          <div className="flex justify-center align-middle">
            <button className="border-2 border-black px-2 py-1">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
