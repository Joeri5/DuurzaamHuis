import React from 'react';
import PowerCard from "../components/PowerCard";
import TempInsideCard from "../components/TempInsideCard";
import TempOutsideCard from "../components/TempOutsideCard";

const DashboardPage = () => {
    return (
        <div className="px-6">
            <div className="py-12">
                <h1 className="font-bold text-5xl">House Dashboard</h1>
                <p className="font-normal text-gray-500 text-3xl">Welcome, Joeri!</p>
            </div>
            <div className="flex justify-between pb-12">
                <PowerCard />
                <TempInsideCard />
                <TempOutsideCard />
            </div>
            <div>
                <p className="py-3 font-medium text-xl">Property</p>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.892840350995!2d4.746816415962091!3d52.62578057983442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf57cbba9605c9%3A0xe1ba0e9822efad39!2sLandstraat%2065%2C%201814%20BD%20Alkmaar!5e0!3m2!1snl!2snl!4v1648472388717!5m2!1snl!2snl"
                    className="w-full h-52 rounded-3xl"
                    allowFullScreen="true"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                />
            </div>
        </div>
    );
};

export default DashboardPage;
