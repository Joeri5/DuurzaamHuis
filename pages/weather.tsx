import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useWeather } from "../hooks/weather";
import { useLocation } from "../hooks/location";
import {
  SunnyDay,
  HeavyWinds,
  RainyDay,
  ThunderRain,
  CloudyWeather,
  SnowWithCloud,
  FoggyWeather,
} from "../assets";
import { IWeatherDay } from "../typings";

type Props = {};

const WeatherLayout = ({
  children,
  item,
}: {
  children?: React.ReactNode;
  item: IWeatherDay;
}) => {
  return (
    <div className="flex flex-col text-center justify-center gap-0.5">
      <p className="font-medium">{item.time.date}</p>
      <p>
        {item.temperature.min} ℃ (max: {item.temperature.max} ℃)
      </p>
      {children && children}
    </div>
  );
};

const WeatherCard = ({ data }: { data: IWeatherDay }) => {
  if (data.temperature.min > 6 && data.rain_expected) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={ThunderRain}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  } else if (data.temperature.min > 4) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={FoggyWeather}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  } else if (data.temperature.min > 10) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={CloudyWeather}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  } else if (data.temperature.min > 15) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={SunnyDay}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  } else if (data.wind_speed.km > 30) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={HeavyWinds}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  } else if (data.snow_expected) {
    return (
      <WeatherLayout item={data}>
        <div className="mx-auto">
          <Image
            src={SnowWithCloud}
            layout="fixed"
            height={70}
            width={140}
            alt="Rain expected"
          />
        </div>
      </WeatherLayout>
    );
  }

  return <WeatherLayout item={data} />;
};

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
        {/* <Image src={SunnyDay} alt="" /> */}
        {location != null &&
        location.data != null &&
        location.data.temperature > 10 ? (
          <Image src={SunnyDay} />
        ) : (
          <Image src={FoggyWeather} />
        )}
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
      <div className="grid grid-cols-3 ">
        {weather.data.map((item) => (
          <WeatherCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
