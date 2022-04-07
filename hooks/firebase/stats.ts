import { useEffect, useMemo, useState } from "react";

import { firestore } from "../../lib/firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";
import moment from "moment";
import { blob } from "node:stream/consumers";

interface Statistic {
  date: string;
  value: number;
}

interface StatisticOverview {
  power: Statistic[];
  water: Statistic[];
  temperature: Statistic[];
}

export function useStats() {
  const [statistics, setStatistics] = useState<StatisticOverview | null>(null);

  useEffect(() => {
    const ref = doc(firestore, "insights", "luaI94MaDm1Z0e3PFeqw");

    return onSnapshot(ref, (snapshot) => {
      const data = snapshot.data();

      const powerUpdate = [];
      const waterUpdate = [];
      const temperatureUpdate = [];

      for (const key in data?.power!) {
        powerUpdate.push({
          date: key,
          value: data?.power![key],
        });
      }

      for (const key in data?.water!) {
        waterUpdate.push({
          date: key,
          value: data?.water![key],
        });
      }

      for (const key in data?.temperature!) {
        temperatureUpdate.push({
          date: key,
          value: data?.temperature![key],
        });
      }

      powerUpdate.sort(
        (a, b) =>
          moment(a.date, "DD/MM/YYYY").unix() -
          moment(b.date, "DD/MM/YYYY").unix()
      );
      waterUpdate.sort(
        (a, b) =>
          moment(a.date, "DD/MM/YYYY").unix() -
          moment(b.date, "DD/MM/YYYY").unix()
      );
      temperatureUpdate.sort(
        (a, b) =>
          moment(a.date, "DD/MM/YYYY").unix() -
          moment(b.date, "DD/MM/YYYY").unix()
      );

      setStatistics({
        water: waterUpdate,
        power: powerUpdate,
        temperature: temperatureUpdate,
      });
    });
  }, []);

  return useMemo(() => statistics, [statistics]);
}
