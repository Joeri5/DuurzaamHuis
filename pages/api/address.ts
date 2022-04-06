import { NextApiRequest, NextApiResponse } from "next";
import { IAddressResult } from "../../typings";
import Geocode from "react-geocode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IAddressResult>
) {
  const { lat, lon } = req.query;

  const response = await Geocode.fromLatLng(
    lat.toString(),
    lon.toString(),
    process.env.GEOAPI_KEY
  );
  if (response) {
    res.status(200).json({
      error: false,
      data: response.results[0].formatted_address,
    });
  } else {
    res.status(400).json({ error: true, data: "" });
  }
}
