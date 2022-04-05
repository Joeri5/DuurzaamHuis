import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ILocationResult } from "../../typings";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILocationResult>
) {
  const { lat, lon } = req.query;

  const response = await axios.get(
    "https://weatherapi-com.p.rapidapi.com/forecast.json",
    {
      params: { q: [lat, lon].join(","), days: 0 },
      headers: {
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        "X-RapidAPI-Key": "9f412dd59emshaa1db6c51c74e6fp180e84jsn0010d85281e3",
      },
    }
  );

  if (response) {
    res.status(200).json({
      error: false,
      data: {
        location: response.data.location.name,
        temperature: response.data.current.temp_c,
      },
    });
  } else {
    console.error("Error fetching weather data");
    res.status(500).json({ error: true, data: null });
  }
}
