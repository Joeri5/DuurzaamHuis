import { NextPage } from "next";
import React from "react";
import { Calculator } from "../components";

type Props = {};

type CalculatorType = "annual" | "monthly";

const CalculatorPage: NextPage = (props: Props) => {
  return (
    <div className="p-5 grid grid-cols-1 gap-5 mr-10">
      <Calculator
        defaultType="monthly"
        title="Power Usage Calculator"
        unitOne="Usage"
        unitTwo="Price"
        placeholderOne="Enter kWh"
        placeholderTwo="Enter €/kWh"
        buttonLabel="Calculate"
        outputTemplate="If you use {0} kWh of electricity, you will pay €{1} {2}."
      />
      <Calculator
        defaultType="monthly"
        title="Water Usage Calculator"
        unitOne="Usage"
        unitTwo="Price"
        placeholderOne="Enter m3"
        placeholderTwo="Enter €/m3"
        buttonLabel="Calculate"
        outputTemplate="If you use {0}m3L of water, you will pay €{1} {2}."
      />
      <Calculator
        defaultType="monthly"
        title="Gas Usage Calculator"
        unitOne="Usage"
        unitTwo="Price"
        placeholderOne="Enter m3"
        placeholderTwo="Enter €/m3"
        buttonLabel="Calculate"
        outputTemplate="If you use {0}m3L of water, you will pay €{1} {2}."
      />
    </div>
  );
};

export default CalculatorPage;
