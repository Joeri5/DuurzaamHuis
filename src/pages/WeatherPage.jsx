import React from 'react';
import Sun from "../assets/sunny-day.png"
import WeatherCard from "../components/WeatherCard";
import SnowWithCloud from "../assets/snow-with-cloud.svg";
import ThunderWithRain from "../assets/thunder-with-rain.svg";
import RainInSunnyWeather from "../assets/rain-in-sunny-weather.svg";
import HeavyWinds from "../assets/heavy-winds.svg";
import SunnyDay from "../assets/sunny-day2.svg";
import CloudyWeather from "../assets/cloudy-weather.svg";
import SunnyCloud from "../assets/sunny-cloud.svg";

const WeatherPage = () => {
    return (
        <div className="px-6 flex flex-col justify-between py-12 h-screen">
            <div>
                <h1 className="font-bold text-5xl">House Dashboard</h1>
                <p className="font-normal text-gray-500 text-3xl">Welcome, Joeri!</p>
            </div>
            <div className="grid grid-cols-2">
                <img src={Sun} alt=""/>
                <div>
                    <p>14</p>
                    <div>
                        <p>cke jkf</p>
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
