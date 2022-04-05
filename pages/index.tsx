import type { NextPage } from "next";
import {
  PowerCard,
  TemperatureInsideCard,
  TemperatureOutsideCard,
} from "../components";
import { House } from "../assets";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useCoords } from "../hooks/coords";

const Home: NextPage = () => {
  const [user, loading] = useAuthState(auth);
  const [lat, lon] = useCoords();

  return (
    <div className="px-6 flex flex-col justify-evenly py-10 h-screen">
      <div>
        <p className="font-normal text-3xl">
          Welcome, {user?.displayName || "Loading..."}!
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <PowerCard />
        <TemperatureOutsideCard />
        <TemperatureInsideCard />
      </div>
      <div>
        <p className="font-medium text-xl">Your location</p>

        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD0OLtCUN5fxsFZKZEFduOHbVeE17wcCAA&q=${lat},${lon}&zoom=14&maptype=roadmap`}
          className="w-full rounded-3xl h-64 my-3"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <Image
              layout="fixed"
              width={80}
              height={80}
              src={House}
              alt="image of house"
            />
            <div>
              <p className="font-semibold">Name of House</p>
              <p>Landstraat 65, 1814BD Alkmaar</p>
            </div>
          </div>
          <div className="flex items-center mr-80">
            <span className="my-1.5 mx-2 w-4 h-4 rounded-full bg-green-400"></span>
            <p className="font-light">active</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
