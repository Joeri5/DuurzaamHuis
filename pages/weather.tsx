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
      {weather.data
        // .filter((day) => day.time.date === "2022-04-06")
        .map((day) => (
          <div>
            <span>
              Op {day.time.date} om {day.time.time} is het{" "}
              {day.temperature > 10 ? "🥵" : "🥶"} ({day.temperature}) graden.
            </span>
          </div>
        ))}
    </div>
  );
};

export default Weather;
