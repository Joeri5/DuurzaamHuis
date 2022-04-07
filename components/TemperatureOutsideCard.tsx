import React from "react";
import { useLocation } from "../hooks/location";
import Card from "./Card";

type Props = {};

const TemperatureOutsideCard = (props: Props) => {
  const location = useLocation();

  return (
    <Card background="bg-feta-500">
      <div className="flex flex-col gap-y-2">
        <p className="text-gray-700">Current Temperature</p>
        <h3 className="font-medium text-3xl">
          {location == null ? "Loading..." : location.data?.location}
        </h3>
        <p className="text-5xl font-thin text-celadon-500">
          {location == null ? "Loading..." : location.data?.temperature}℃
        </p>
      </div>
      <div className="absolute top-5 right-5 invisible md:visible">
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

export default TemperatureOutsideCard;
