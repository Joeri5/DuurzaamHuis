import React from 'react';
import Sun from "../assets/sunny-day.webp"
import WeatherCard from "../components/WeatherCard";
import SnowWithCloud from "../assets/snow-with-cloud.webp";
import ThunderWithRain from "../assets/thunder-with-rain.webp";
import RainInSunnyWeather from "../assets/rain-in-sunny-weather.webp";
import HeavyWinds from "../assets/heavy-winds.webp";
import SunnyDay from "../assets/sunny-day2.webp";
import CloudyWeather from "../assets/cloudy-weather.webp";
import SunnyCloud from "../assets/sunny-cloud.webp";

const WeatherPage = () => {


    return (
        <div className="px-6 flex flex-col justify-between py-12 h-screen">
            <div>
                <h1 className="font-bold text-5xl">House Dashboard</h1>
                <p className="font-normal text-gray-500 text-3xl">Welcome, Joeri!</p>
            </div>
            <div className="grid grid-cols-2">
                <img src={Sun} alt=""/>
                <div className="text-center">
                    <p className="text-9xl py-10 text-celadon-500">14℃</p>
                    <div className="grid grid-cols-3">
                        <div>
                            <p className="text-2xl opacity-60">Wind Now</p>
                            <p className="text-3xl py-2">12 <span className="text-lg">km/h</span></p>
                        </div>
                        <div>
                            <p className="text-2xl opacity-60">Humidity</p>
                            <p className="text-3xl py-2">54%</p>
                        </div>
                        <div>
                            <p className="text-2xl opacity-60">Precipitation</p>
                            <p className="text-3xl py-2">32%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-7 ">
                <WeatherCard image={SnowWithCloud} day="Monday" temp="14℃"/>
                <WeatherCard image={ThunderWithRain} day="Tuesday" temp="13℃"/>
                <WeatherCard image={RainInSunnyWeather} day="Wednesday" temp="9℃"/>
                <WeatherCard image={HeavyWinds} day="Thursday" temp="4℃"/>
                <WeatherCard image={SunnyDay} day="Friday" temp="15℃"/>
                <WeatherCard image={CloudyWeather} day="Saturday" temp="12℃"/>
                <WeatherCard image={SunnyCloud} day="Sunday" temp="13℃"/>
            </div>
        </div>
    );
};

export default WeatherPage;
