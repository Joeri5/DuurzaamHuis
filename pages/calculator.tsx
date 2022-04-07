import { NextPage } from "next";
import React from "react";

type Props = {};

type CalculatorType = "annual" | "monthly";

const Calculator: NextPage = (props: Props) => {
  const [calculatorType, setCalculatorType] =
    React.useState<CalculatorType>("annual");

  return (
    <div className="p-5 grid grid-cols-1 gap-5 mr-10">
      <div className="p-5 shadow-lg rounded-2xl">
        <div className="flex my-5 justify-between">
          <h2 className="">Calculate power usage cost</h2>
          <div className="flex bg-gray-200 rounded-xl">
            <button
              onClick={() => setCalculatorType("annual")}
              className={`px-2 py-1 rounded-xl${
                calculatorType === "annual" && " bg-gray-400 text-white"
              }`}
            >
              Annual
            </button>
            <button
              onClick={() => setCalculatorType("monthly")}
              className={`px-2 py-1 rounded-xl${
                calculatorType === "monthly" && " bg-gray-400 text-white"
              }`}
            >
              Monthly
            </button>
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
