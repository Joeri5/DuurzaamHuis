import {Add} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton"

import Chart from "../assets/chart.svg";

function PowerCard() {
    return (
        <div className="w-8/25 h-52 bg-pink-lady-500 rounded-3xl flex justify-evenly">
            <div className="py-3 flex flex-col">
                <p className="pt-3 text-gray-700 mb-2">Power Usage</p>
                <h3 className="font-medium text-5xl mb-2">10kWh</h3>
                <img className="w-56 h-20" src={Chart} alt="chart"/>
            </div>
            <div className="py-7">
                <IconButton color="inherit" className="w-20 h-20" style={{ backgroundColor: "white" }}>
                    <Add fontSize="large" color="black" />
                </IconButton>
            </div>
        </div>
    )
}

export default PowerCard;