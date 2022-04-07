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
import { useStats } from "../hooks/firebase/stats";

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
  const data = useStats();

  if (data == null) {
    return <div>Loading...</div>;
  }

  console.log(data);

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
            labels: Object.values(data.power).map((o) => o.date),
            datasets: [
              {
                label: "Usage in kWh",
                data: Object.values(data.power).map((o) => o.value),
                borderColor: "#FFD124",
                backgroundColor: "#ffe379",
              },
            ],
          }}
        />
      </div>
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Water Usage</h2>
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
            labels: Object.values(data.water).map((o) => o.date),
            datasets: [
              {
                label: "Usage in m³",
                data: Object.values(data.water).map((o) => o.value),
                borderColor: "#30AADD",
                backgroundColor: "#30AADD",
                showLine: true,
              },
              {
                label: "Avg household",
                hidden: true,
                data: [3.3, 3.2, 3.1, 3.4, 3.3, 3.2, 3.1],
                backgroundColor: "#c2e6f5",
                borderColor: "#c2e6f5",
              },
            ],
          }}
        />
      </div>
      <div className="p-5 shadow-lg rounded-2xl space-y-5 bg-[#fff]">
        <h2 className="font-semibold text-2xl">Temperature Avg</h2>
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
            labels: Object.values(data.temperature).map((o) => o.date),
            datasets: [
              {
                label: "Temperature in °C",
                data: Object.values(data.temperature.map((o) => o.value)),
                borderColor: "#FF5F00",
                backgroundColor: "#ff9455",
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
