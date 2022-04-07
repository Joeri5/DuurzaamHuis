import React from "react";
import { useStats } from "../hooks/firebase/stats";
import Card from "./Card";

type Props = {};

const TemperatureInsideCard = (props: Props) => {
  const statistics = useStats();

  return (
    <Card background="bg-fair-pink-500">
      <div className="flex flex-col gap-y-2">
        <p className="text-gray-700">Average Temperature</p>
        <h3 className="font-medium text-3xl">Household</h3>
        <p className="text-5xl font-thin text-brink-pink-500">
          {statistics == null
            ? "Loading..."
            : Math.round(
                (statistics.temperature
                  .map((item) => item.value)
                  .reduce((acc, curr) => acc + curr) /
                  statistics.temperature.length) *
                  10
              ) / 10}
          ℃
        </p>
      </div>
      <div className="absolute top-5 right-5">
        <div className="w-20 h-20 bg-white rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>
    </Card>
  );
};

export default TemperatureInsideCard;
