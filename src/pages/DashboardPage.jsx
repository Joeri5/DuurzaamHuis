import React from 'react';
import PowerCard from "../components/PowerCard";
import TempInsideCard from "../components/TempInsideCard";
import TempOutsideCard from "../components/TempOutsideCard";
import House from "../assets/house.png"
import {Circle, Bed, Shower} from "@mui/icons-material";

const DashboardPage = () => {

    return (
        <div className="px-6 flex flex-col justify-between py-10 h-screen">
            <div>
                <h1 className="font-bold text-5xl">House Dashboard</h1>
                <p className="font-normal text-gray-500 text-3xl">Welcome, Joeri!</p>
            </div>
            <div className="grid grid-cols-3  gap-x-5">
                <PowerCard/>
                <TempInsideCard/>
                <TempOutsideCard/>
            </div>
            <div>
                <p className="justify-evenly font-medium text-xl">Property</p>
                {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
                <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_MAPS_API}&q=1814BD+Alkmaar,+Netherlands&zoom=18&maptype=roadmap`}
                    className="w-full rounded-3xl h-64 my-3"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer"
                >

                </iframe>
                <div className="flex" style={{alignItems: "center"}}>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img className="md:w-20" src={House} alt="image of house"/>
                    <div className="px-5 mr-64">
                        <p className="font-semibold">Name of House</p>
                        <p>Landstraat 65, 1814BD Alkmaar</p>
                    </div>
                    <div className="flex mr-80">
                        <Circle fontSize={"normal"} htmlColor={"#87C754"} className="my-1.5 mx-2"/>
                        <p className="font-light">active</p>
                    </div>
                    <div className="flex gap-5 ">
                        <div className="flex">
                            <Bed className="mr-2"/>
                            <p>2</p>
                        </div>
                        <div className="flex border-black border-r-1.5">
                            <Shower className="mr-2"/>
                            <p className="pr-5">1</p>
                        </div>
                        <div>
                            <p>75 m²</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
