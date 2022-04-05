import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IWeatherAPIResult } from "../../typings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeatherAPIResult>
) {
  const { lat, lon } = req.query;

  const response = await axios.get(
    "https://weatherapi-com.p.rapidapi.com/forecast.json",
    {
      params: { q: [lat, lon].join(","), days: 3 },
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "9f412dd59emshaa1db6c51c74e6fp180e84jsn0010d85281e3",
      },
    }
  );

  if (response) {
    res.status(200).json({
      error: false,
      data: response.data.forecast.forecastday.map((day: any) => ({
        temperature: {
          min: day.day.mintemp_c,
          max: day.day.maxtemp_c,
        },
        wind_speed: {
          km: Math.round(day.day.maxwind_kph * 10) / 10,
          miles: Math.round(day.day.maxwind_mph * 10) / 10,
        },
        rain_expected: day.day.daily_will_it_rain === 1,
        snow_expected: day.day.daily_will_it_snow === 1,
        time: {
          date: day.date,
          time: day.date_epoch,
        },
        astro: {
          sunrise: day.astro.sunrise,
          sunset: day.astro.sunset,
        },
      })),
    });
  } else {
    console.error("Error fetching weather data");
    res.status(500).json({ error: true, data: [] });
  }
}
