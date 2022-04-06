import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useWeather } from "../hooks/weather";
import { useLocation } from "../hooks/location";
import { SunnyDay, HeavyWinds } from "../assets";

type Props = {};

const Weather: NextPage = (props: Props) => {
  const weather = useWeather();
  const location = useLocation();

  if (weather == null) {
    return <div>Loading...</div>;
  }

  return (
    // <div>
    //   <table className="border-collapse border table-fixed">
    //     <thead className="border-b">
    //       <tr className="divide-x">
    //         <th>Dag/tijd</th>
    //         <th>Temperatuur (℃)</th>
    //         <th>Wind snelheid</th>
    //         <th>Zon op / Zon onder</th>
    //       </tr>
    //     </thead>
    //     <tbody className="divide-x divide-y">
    //       {weather.data.map((item) => (
    //         <tr className="divide-x">
    //           <td>{item.time.date}</td>
    //           <td>
    //             {item.temperature.min} (max: {item.temperature.max})
    //           </td>
    //           <td>{item.wind_speed.km} km/h</td>
    //           <td>
    //             {item.astro.sunrise} / {item.astro.sunset}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="px-6 flex flex-col justify-between py-12 h-screen">
      <div>
        <h1 className="font-bold text-5xl">House Dashboard</h1>
        <p className="font-normal text-gray-500 text-3xl">Welcome, Joeri!</p>
      </div>
      <div className="grid grid-cols-2">
        {/* <img src={Sun} alt="" /> */}
        <div className="text-center">
          <p className="text-9xl py-10 text-celadon-500">
            {location == null ? "Loading..." : location.data?.temperature}℃
          </p>
          <div className="grid grid-cols-3">
            <div>
              <p className="text-2xl opacity-60">Wind Now</p>
              <p className="text-3xl py-2">
                {location == null ? "Loading..." : location.data?.wind_speed.km}{" "}
                <span className="text-lg">km/h</span>
              </p>
            </div>
            <div>
              <p className="text-2xl opacity-60">Humidity</p>
              <p className="text-3xl py-2">
                {location == null ? "Loading..." : location.data?.humidity}%
              </p>
            </div>
            <div>
              <p className="text-2xl opacity-60">Precipitation</p>
              <p className="text-3xl py-2">
                {location == null ? "Loading..." : location.data?.precipitation}
                <span className="text-lg"> mm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 ">
        {/* <WeatherCard image={SnowWithCloud} day="Monday" temp="14℃" />
        <WeatherCard image={ThunderWithRain} day="Tuesday" temp="13℃" />
        <WeatherCard image={RainInSunnyWeather} day="Wednesday" temp="9℃" />
        <WeatherCard image={HeavyWinds} day="Thursday" temp="4℃" />
        <WeatherCard image={SunnyDay} day="Friday" temp="15℃" />
        <WeatherCard image={CloudyWeather} day="Saturday" temp="12℃" />
        <WeatherCard image={SunnyCloud} day="Sunday" temp="13℃" /> */}
        {weather.data.map((item) => (
          <div className="flex flex-col text-center justify-center gap-0.5">
            <p className="font-medium">{item.time.date}</p>
            <p>
              {item.temperature.min} ℃ (max: {item.temperature.max} ℃)
            </p>
            {/* <img className="w-full" src={image} alt="" /> */}
            {item.temperature.min > 10 ? (
              <Image src={SunnyDay} alt="Sunny Day" />
            ) : (
              <Image src={HeavyWinds} alt="Heavy" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
