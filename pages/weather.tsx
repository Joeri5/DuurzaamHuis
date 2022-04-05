import { NextPage } from "next";
import React from "react";
import { useWeather } from "../hooks/weather";

type Props = {};

const Weather: NextPage = (props: Props) => {
  const weather = useWeather();

  if (weather == null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="border-collapse border table-fixed">
        <thead className="border-b">
          <tr className="divide-x">
            <th>Dag/tijd</th>
            <th>Temperatuur (℃)</th>
            <th>Wind snelheid</th>
            <th>Zon op / Zon onder</th>
          </tr>
        </thead>
        <tbody className="divide-x divide-y">
          {weather.data.map((item) => (
            <tr className="divide-x">
              <td>{item.time.date}</td>
              <td>
                {item.temperature.min} (max: {item.temperature.max})
              </td>
              <td>{item.wind_speed.km} km/h</td>
              <td>
                {item.astro.sunrise} / {item.astro.sunset}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
