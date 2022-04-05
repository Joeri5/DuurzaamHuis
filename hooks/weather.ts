import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IWeatherAPIResult } from "../typings";
import { useCoords } from "./coords";

export function useWeather() {
  const geoLocation = useCoords();
  const [weather, setWeatherData] = useState<IWeatherAPIResult | null>(null);

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

  return useMemo(() => weather, [weather]);
}
