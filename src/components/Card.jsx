import React from 'react';

const Card = ({ children, background }) => {
    return (
        <div className={`px-10 ${background} rounded-3xl flex justify-evenly`}>
            {children}
        </div>
    );
};

export default Card;
