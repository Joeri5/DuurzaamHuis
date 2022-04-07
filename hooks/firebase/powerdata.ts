import { useEffect, useMemo, useState } from "react";

import { firestore } from "../../lib/firebase";
import { getDoc, doc, onSnapshot } from "firebase/firestore";

interface PowerData {
  date: string;
  value: number;
}

export function usePowerData() {
  const [powerData, setPowerData] = useState<PowerData[] | null>(null);

  useEffect(() => {
    const ref = doc(firestore, "insights", "luaI94MaDm1Z0e3PFeqw");

    return onSnapshot(ref, (snapshot) => {
      const data = snapshot.data();
      const update = [];

      for (const key in data?.power!) {
        update.push({
          date: key,
          value: data?.power![key],
        });
      }

      setPowerData(update.sort((a, b) => a.date.localeCompare(b.date)));
    });
  }, []);

  return useMemo(() => powerData, [powerData]);
}
