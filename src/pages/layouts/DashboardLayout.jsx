import React from 'react';
import SideBar from "../../components/SideBar";
import SideBarPhone from "../../components/SideBarPhone";

const DashboardLayout = ({ children }) => {
    return (
        <>
            <div className="w-full flex">
                <div className="visible w-20 xl:w-80 h-screen">
                    <SideBar />
                </div>
                <div>
                    <SideBarPhone />
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;
