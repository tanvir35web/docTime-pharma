import React from "react";
import locationIcon from "../assets/images/map-pin.png";
import bottomArrow from "../assets/images/container.png";

const Location = () => {
    return (
        <div className="flex flex-row items-center gap-2">
            <div>
                <img src={locationIcon} alt="Location Icon" />
            </div>
            <div>
                <div>Delivery Location</div>
                <div className="flex flex-row items-center gap-2 text-docTime-blue font-semibold">
                    Add Location
                    <span>    
                        <img src={bottomArrow} alt="bottom Arrow" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Location;
