import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { IAddressResult } from "../typings";
import { useCoords } from "./coords";

export function useAddress() {
  const geoLocation = useCoords();
  const [address, setAddressData] = useState<IAddressResult | null>(null);

  useEffect(() => {
    if (geoLocation[0] !== 0 && geoLocation[1] !== 0) {
      axios
        .get("/api/address", {
          params: {
            lat: geoLocation[0],
            lon: geoLocation[1],
          },
        })
        .then((res) => {
          setAddressData(res.data);
        });
    }
  }, [geoLocation]);

  return useMemo(() => address, [address]);
}
