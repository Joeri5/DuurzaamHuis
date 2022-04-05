import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import {
  DashboardIcon,
  PowerIcon,
  CalculatorIcon,
  LightsIcon,
  SunIcon,
  HouseIcon,
  UnknownUserIcon,
} from "../assets";
import { auth } from "../lib/firebase";

type BarNavLinkProps = {
  children: React.ReactNode;
  to: string;
};

function BarNavLink({ children, to }: BarNavLinkProps) {
  const router = useRouter();

  return router.asPath === to ? (
    <button className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl">
      {children}
    </button>
  ) : (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-x-3 text-xl px-10 py-2 rounded-xl filter-img-child"
    >
      {children}
    </button>
  );
}

type Props = {};

const SideBar = (props: Props) => {
  const router = useRouter();
  const [user, loading] = useAuthState(auth);

  return (
    <div className="h-screen w-80 fixed flex">
      <div className="px-6 h-full flex flex-col justify-between items-center">
        <div className="flex flex-col items-center">
          <div className="font-light text-4xl uppercase py-14 flex gap-x-1">
            <Image
              className="absolute"
              layout="fixed"
              src={HouseIcon}
              height={80}
              width={80}
            />
            <h1 className="relative mt-8 -ml-5">House</h1>
          </div>
          <div className="flex flex-col gap-y-6">
            <BarNavLink to="/">
              <Image
                layout="fixed"
                width={40}
                height={40}
                src={DashboardIcon}
              />
              Dashboard
            </BarNavLink>
            <BarNavLink to="/weather">
              <Image layout="fixed" width={40} height={40} src={SunIcon} />
              Weather
            </BarNavLink>
            <BarNavLink to="/power">
              <Image layout="fixed" width={40} height={40} src={PowerIcon} />
              Power
            </BarNavLink>
            <BarNavLink to="/calculator">
              <Image
                layout="fixed"
                width={40}
                height={40}
                src={CalculatorIcon}
              />
              Calculator
            </BarNavLink>
            <BarNavLink to="/lights">
              <Image layout="fixed" width={40} height={40} src={LightsIcon} />
              Lights
            </BarNavLink>
          </div>
        </div>
        <div className="flex flex-col items-center text-center py-16 select-none">
          <Image
            layout="fixed"
            width={90}
            height={90}
            className="rounded-full"
            src={loading ? UnknownUserIcon : user?.photoURL || UnknownUserIcon}
            alt="???"
          />
          <span className="font-semibold mt-3">
            {loading ? "Loading..." : user?.displayName || "Loading..."}
          </span>
          <span>{loading ? "Loading..." : user?.email || "Loading..."}</span>
          <button
            onClick={() => {
              signOut(auth);
              router.push("/login");
            }}
            className="mt-5 bg-black text-white px-3 py-2 rounded-md font-medium active:bg-opacity-80 hover:bg-opacity-90 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
