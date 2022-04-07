import { NextPage } from "next";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { usePowerData } from "../hooks/firebase/powerdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

type Props = {};

const Insights: NextPage = (props: Props) => {
  const data = usePowerData();

  if (data == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-5 grid grid-cols-2 gap-5">
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Power Usage</h2>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          data={{
            labels: Object.values(data).map((o) => o.date),
            datasets: [
              {
                label: "Usage in kWh",
                data: Object.values(data).map((o) => o.value),
                borderColor: "#FFD124",
                backgroundColor: "#ffe379",
              },
            ],
          }}
        />
      </div>
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Power Usage</h2>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          data={{
            labels: Object.values(data).map((o) => o.date),
            datasets: [
              {
                label: "Usage in kWh",
                data: Object.values(data).map((o) => o.value),
                borderColor: "#FFD124",
                backgroundColor: "#ffe379",
              },
            ],
          }}
        />
      </div>
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Power Usage</h2>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          data={{
            labels: Object.values(data).map((o) => o.date),
            datasets: [
              {
                label: "Usage in kWh",
                data: Object.values(data).map((o) => o.value),
                borderColor: "#FFD124",
                backgroundColor: "#ffe379",
              },
            ],
          }}
        />
      </div>
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Power Usage</h2>
        <Line
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top" as const,
              },
            },
          }}
          data={{
            labels: Object.values(data).map((o) => o.date),
            datasets: [
              {
                label: "Usage in kWh",
                data: Object.values(data).map((o) => o.value),
                borderColor: "#FFD124",
                backgroundColor: "#ffe379",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Insights;
