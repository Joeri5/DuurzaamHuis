import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { IWeatherAPIResult } from "../../typings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IWeatherAPIResult>
) {
  const { lat, lon } = req.query;

  const response = await axios.get(
    "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
    {
      params: { lat, lon },
      headers: {
        "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
        "X-RapidAPI-Key": "9f412dd59emshaa1db6c51c74e6fp180e84jsn0010d85281e3",
      },
    }
  );

  if (response) {
    res.status(200).json({
      error: false,
      data: response.data.data.map((day: any) => ({
        temperature: day.temp,
        wind_speed: Math.round(day.wind_spd * 1.60934 * 10) / 10,
        precipitation: day.precip,
        time: {
          date: day.timestamp_local.split("T")[0],
          time: day.timestamp_local.split("T")[1],
        },
      })),
    });
  } else {
    res.status(500).json({ error: true, data: [] });
  }
}
