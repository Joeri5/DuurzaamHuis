import React from 'react';

const WeatherCard = ({image, day, temp}) => {
    return (
        <div className="flex flex-col text-center justify-center gap-0.5">
            <p className="font-medium">{day}</p>
            <p>{temp}</p>
            <img className="w-full" src={image} alt=""/>
        </div>
    );
};

export default WeatherCard;
