import { useEffect, useMemo, useState } from "react";

export function useCoords() {
  const [geoLocation, setGeoLocation] = useState([0, 0]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setGeoLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);

  return useMemo(() => geoLocation, [geoLocation]);
}
