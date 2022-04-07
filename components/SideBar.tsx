import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import {
  DashboardIcon,
  ChartIcon,
  CalculatorIcon,
  SunIcon,
  HouseIcon,
  HamburgerIcon,
} from "../assets";
import { auth } from "../lib/firebase";
import { motion } from "framer-motion";

type BarNavLinkProps = {
  children: React.ReactNode;
  to: string;
  ignoreColor?: boolean;
};

function BarNavLink({ children, to, ignoreColor }: BarNavLinkProps) {
  const router = useRouter();

  return ignoreColor ? (
    <button
      onClick={() => router.push(to)}
      className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl"
    >
      {children}
    </button>
  ) : router.asPath === to ? (
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

  const [isOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      {!isOpen && (
        <button
          className="absolute top-5 right-5 md:hidden z-20 bg-black h-12 w-12 flex justify-center items-center rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={HamburgerIcon} layout="fixed" height={32} width={32} />
        </button>
      )}

      {isOpen && (
        <motion.div
          onClick={() => setIsOpen(!isOpen)}
          animate={{ x: ["-100%", "0%"] }}
          className="bg-black h-screen w-screen fixed z-10 text-white"
        >
          <div className="relative">
            <button className="absolute top-5 right-5 text-3xl">✕</button>
          </div>

          <div className="flex flex-col gap-y-6 pt-5">
            <BarNavLink ignoreColor to="/">
              <Image
                layout="fixed"
                width={40}
                height={40}
                src={DashboardIcon}
              />
              Dashboard
            </BarNavLink>
            <BarNavLink ignoreColor to="/weather">
              <Image layout="fixed" width={40} height={40} src={SunIcon} />
              Weather
            </BarNavLink>
            <BarNavLink ignoreColor to="/insights">
              <Image layout="fixed" width={40} height={40} src={ChartIcon} />
              Insights
            </BarNavLink>
            <BarNavLink ignoreColor to="/calculator">
              <Image
                layout="fixed"
                width={40}
                height={40}
                src={CalculatorIcon}
              />
              Calculator
            </BarNavLink>
          </div>
        </motion.div>
      )}

      <div className="h-screen w-80 fixed hidden md:flex">
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
              <BarNavLink to="/insights">
                <Image layout="fixed" width={40} height={40} src={ChartIcon} />
                Insights
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
            </div>
          </div>
          <div className="flex flex-col items-center text-center py-14 select-none">
            <span className="font-semibold mt-2 mb-2">
              {loading ? "Loading..." : user?.displayName || "Loading..."}
            </span>
            <span>{loading ? "Loading..." : user?.email || "Loading..."}</span>
            <button
              onClick={() => {
                signOut(auth);
                router.push("/login");
              }}
              className="mt-3 bg-black text-white px-3 py-2 rounded-md font-medium active:bg-opacity-80 hover:bg-opacity-90 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
