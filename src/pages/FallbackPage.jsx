import React from 'react';
import NotFound from "../assets/404.webp"

const FallbackPage = () => {
    return (
        <div className="flex justify-center">
            <img src={NotFound} alt="404 error" className="h-screen"/>
        </div>
    );
};

export default FallbackPage;
