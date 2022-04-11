import { useRef, useState } from "react";

type CalculatorType = "annually" | "monthly";
type Props = {
  defaultType: CalculatorType;
  title: string;
  unitOne: string;
  unitTwo: string;
  placeholderOne: string;
  placeholderTwo: string;
  buttonLabel: string;
  outputTemplate: string;
};

const Calculator = (props: Props) => {
  const [calculatorType, setCalculatorType] = useState<CalculatorType>(
    props.defaultType
  );
  const [output, setOutput] = useState<string | null>(null);

  const inputOneRef = useRef<HTMLInputElement>(null);
  const inputTwoRef = useRef<HTMLInputElement>(null);

  function calculate() {
    const { value: inputOne } = inputOneRef.current!;
    const { value: inputTwo } = inputTwoRef.current!;

    if (inputOne && inputTwo) {
      const result =
        calculatorType === "annually"
          ? parseFloat(inputOne) * parseFloat(inputTwo) * 12
          : parseFloat(inputOne) * parseFloat(inputTwo);

      setOutput(
        props.outputTemplate
          .replace("{0}", inputOne)
          .replace("{1}", result.toFixed(2))
          .replace("{2}", calculatorType.toLowerCase())
      );
    }
  }

  return (
    <div className="p-5 shadow-lg rounded-2xl flex flex-col gap-y-5">
      <div className="flex my-5 justify-between">
        <h2 className="font-semibold text-xl">{props.title}</h2>
        <div className="flex bg-gray-200 rounded-xl">
          <button
            onClick={() => setCalculatorType("annually")}
            className={`px-2 py-1 rounded-xl${
              calculatorType === "annually" && " bg-gray-400 text-white"
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

      {output && (
        <span className="bg-green-300 px-5 py-3 rounded-md shadow-sm flex gap-x-3 justify-between transition duration-200 ease-in">
          {output}
          <button onClick={() => setOutput(null)}>✕</button>
        </span>
      )}

      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor={props.unitOne} className="my-1">
            {props.unitOne}
          </label>
          <input
            ref={inputOneRef}
            id={props.unitOne}
            type="number"
            placeholder={props.placeholderOne}
            className="border-2 border-black focus:outline-none focus:shadow-lg transition duration-300 px-3 py-2 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor={props.unitTwo} className="my-1">
            {props.unitTwo}
          </label>
          <input
            ref={inputTwoRef}
            id={props.unitTwo}
            type="number"
            placeholder={props.placeholderTwo}
            className="border-2 border-black focus:outline-none focus:shadow-lg transition duration-300 px-3 py-2 rounded-md"
          />
        </div>
      </div>
      <button
        onClick={calculate}
        className="ml-auto w-max border-2 border-black px-2 py-1 hover:bg-black hover:text-white transition duration-300"
      >
        {props.buttonLabel}
      </button>
    </div>
  );
};

export default Calculator;
