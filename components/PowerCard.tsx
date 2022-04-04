import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import Card from "./Card";
import Image from "next/image";

import { Chart } from "../assets";

type Props = {};

const PowerCard = (props: Props) => {
  return (
    <Card background="bg-pink-lady-500">
      <div className="py-3 flex flex-col">
        <p className="pt-3 text-gray-700 mb-2">Power Usage</p>
        <h3 className="font-medium text-5xl mb-2">10kWh</h3>
        <Image src={Chart} layout="raw" className="w-56 h-20" alt="Chart" />
      </div>
      <div className="py-7">
        <IconButton
          color="inherit"
          className="w-20 h-20"
          style={{ backgroundColor: "white" }}
        >
          <Add fontSize="large" />
        </IconButton>
      </div>
    </Card>
  );
};

export default PowerCard;
