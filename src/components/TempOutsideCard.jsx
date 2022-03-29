import IconButton from "@mui/material/IconButton";
import {Add} from "@mui/icons-material";
import Card from "./Card";

function TempOutsideCard() {
    return (
        <Card background="bg-feta-500">
            <div className="py-3 flex flex-col">
                <p className="pt-3 text-gray-700 mb-2">Current Temperature</p>
                <h3 className="font-medium text-5xl mb-6">Alkmaar</h3>
                <p className="text-6xl font-thin text-celadon-500">14℃</p>
            </div>
            <div className="py-7">
                <IconButton color="inherit" className="w-20 h-20" style={{backgroundColor: "white"}}>
                    <Add fontSize="large" color="black"/>
                </IconButton>
            </div>
        </Card>
    );
}

export default TempOutsideCard;