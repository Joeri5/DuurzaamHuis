import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { IWeatherAPIResult } from "../typings";

type Props = {};

const Weather: NextPage = (props: Props) => {
  const [geoLocation, setGeoLocation] = useState([0, 0]);
  const [weather, setWeatherData] = useState<IWeatherAPIResult | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  useEffect(() => {
    if (geoLocation[0] !== 0 && geoLocation[1] !== 0) {
      axios
        .get("/api/weather", {
          params: {
            lat: geoLocation[0],
            lon: geoLocation[1],
          },
        })
        .then((res) => {
          setWeatherData(res.data);
        });
    }
  }, [geoLocation]);

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
