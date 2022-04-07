import React from "react";
import Card from "./Card";
import Image from "next/image";

import { Chart } from "../assets";
import { useStats } from "../hooks/firebase/stats";

type Props = {};

const PowerCard = (props: Props) => {
  const statistics = useStats();

  return (
    <Card background="bg-pink-lady-500">
      <div className="flex flex-col gap-y-2">
        <p className="text-gray-700">Average Power Usage</p>
        <h3 className="font-medium text-3xl">
          {statistics == null
            ? "Loading..."
            : Math.round(
                statistics.power
                  .map((item) => item.value)
                  .reduce((acc, curr) => acc + curr) / statistics.power.length
              )}
          kWh
        </h3>
        <Image
          src={Chart}
          layout="intrinsic"
          className="w-56 h-8"
          alt="Chart"
        />
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

export default PowerCard;
