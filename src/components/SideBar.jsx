import "./SideBar.css";

import DashboardIcon from "../assets/dashboard.svg";
import PowerIcon from "../assets/lightning-2.svg";
import CalculatorIcon from "../assets/calculator.svg";
import LightsIcon from "../assets/adjust.svg";
import SunIcon from "../assets/sun.svg";
import HouseIcon from "../assets/house-1.svg";


import UnknownUserIcon from "../assets/unknown-user.png";

import {divWithClasses, imageWithClasses, spanWithClasses} from "./Element";
import {Link, useLocation} from "react-router-dom";

const Bar = divWithClasses("h-screen", "w-80", "fixed", "flex")
const BarContainer = divWithClasses("px-6", "h-full", "flex", "flex-col", "justify-between", "items-center")
const BarSubContainer = divWithClasses("flex", "flex-col", "items-center")

const BarTitleIcon = imageWithClasses("w-20", "h-20", "absolute")
const BarTitleContainer = divWithClasses("font-light", "text-4xl", "uppercase", "py-14", "flex", "gap-x-1")

const BarNavigationContainer = divWithClasses("flex", "flex-col gap-y-6")
const BarNavIcon = imageWithClasses("w-10", "h-10")

const BarFooter = divWithClasses("flex", "flex-col", "items-center", "text-center", "py-16")
const BarProfilePicture = imageWithClasses("w-24", "h-24")
const BarUsername = spanWithClasses("font-semibold", "mt-3")

function BarNavLink({ children, to }) {
    const location = useLocation();

    return location.pathname === to ? (
        <Link to={to} className="flex items-center gap-x-3 text-white bg-black text-xl px-10 py-2 rounded-xl">
            {children}
        </Link>
    ) : (
        <Link to={to} className="flex items-center gap-x-3 text-xl px-10 py-2 rounded-xl nav__inactive">
            {children}
        </Link>
    )
}

function SideBar() {
    return (
        <Bar>
            <BarContainer>
                <BarSubContainer>
                    <BarTitleContainer>
                        <BarTitleIcon src={HouseIcon} />
                        <h1 className="relative ml-16 mt-8" >House</h1>
                    </BarTitleContainer>
                    <BarNavigationContainer>
                        <BarNavLink to="/">
                            <BarNavIcon src={DashboardIcon} />
                            Dashboard
                        </BarNavLink>
                        <BarNavLink to="/weather">
                            <BarNavIcon src={SunIcon} />
                            Weather
                        </BarNavLink>
                        <BarNavLink to="/power">
                            <BarNavIcon src={PowerIcon} />
                            Power
                        </BarNavLink>
                        <BarNavLink to="/calculator">
                            <BarNavIcon src={CalculatorIcon} />
                            Calculator
                        </BarNavLink>
                        <BarNavLink to="/lights">
                            <BarNavIcon src={LightsIcon} />
                            Lights
                        </BarNavLink>
                    </BarNavigationContainer>
                </BarSubContainer>
                <BarFooter>
                    <BarProfilePicture src={UnknownUserIcon} alt="???" />
                    <BarUsername>Jouw Naam</BarUsername>
                    <span>email@domein.nl</span>
                </BarFooter>
            </BarContainer>
        </Bar>
    )
}

export default SideBar;