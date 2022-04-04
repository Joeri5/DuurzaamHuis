import React from "react";

type Props = {
  children: React.ReactNode;
  background?: string;
};

const Card = ({ children, background }: Props) => {
  return (
    <div className={`px-10 ${background} rounded-3xl flex justify-evenly`}>
      {children}
    </div>
  );
};

export default Card;
