import React from "react";

type Props = {
  children: React.ReactNode;
  background?: string;
};

const Card = ({ children, background }: Props) => {
  return (
    <div
      className={`px-10 py-5 ${background} rounded-3xl flex items-center relative`}
    >
      {children}
    </div>
  );
};

export default Card;
