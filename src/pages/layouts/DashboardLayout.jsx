import React from 'react';
import SideBar from "../../components/SideBar";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="w-full flex">
                <div className="w-80 h-screen">
                    <SideBar />
                </div>
                <div className="w-5/6">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
