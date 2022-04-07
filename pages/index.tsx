import type { NextPage } from "next";
import {
  PowerCard,
  TemperatureInsideCard,
  TemperatureOutsideCard,
} from "../components";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { useAddress } from "../hooks/address";
import { useMediaQuery } from "react-responsive";

const Home: NextPage = () => {
  const [user] = useAuthState(auth);
  const address = useAddress();

  return (
    <div className="px-6 flex flex-col justify-evenly py-10 min-h-screen space-y-5">
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
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD0OLtCUN5fxsFZKZEFduOHbVeE17wcCAA&q=${address?.data
            .toString()
            .replaceAll(" ", "+")}&zoom=14&maptype=roadmap`}
          className="w-full rounded-3xl h-64 my-3"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <Image
              className="rounded-2xl invisible xl:visible"
              layout="fixed"
              width={80}
              height={80}
              src={`http://maps.googleapis.com/maps/api/streetview?location=${address?.data
                .toString()
                .replaceAll(
                  " ",
                  "+"
                )}&size=80x80&key=AIzaSyAX1I6tr_av6EnU2ySOCACGnZGkQtE2mho`}
              alt="image of house"
            />
            <div>
              <p className="font-semibold">Your Residence</p>
              <p>{address?.data.toString()}</p>
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
