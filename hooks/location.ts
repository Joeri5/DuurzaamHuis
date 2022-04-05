import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { ILocationResult } from "../typings";
import { useCoords } from "./coords";

export function useLocation() {
  const geoLocation = useCoords();
  const [location, setLocationData] = useState<ILocationResult | null>(null);

  useEffect(() => {
    if (geoLocation[0] !== 0 && geoLocation[1] !== 0) {
      axios
        .get("/api/location", {
          params: {
            lat: geoLocation[0],
            lon: geoLocation[1],
          },
        })
        .then((res) => {
          setLocationData(res.data);
        });
    }
  }, [geoLocation]);

  return useMemo(() => location, [location]);
}
