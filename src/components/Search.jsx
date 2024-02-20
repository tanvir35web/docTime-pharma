import React from "react";
import vectorLeft from "../assets/images/Vector 1.png";
import vectorRight from "../assets/images/Vector 2.png";
import objectLeft from "../assets/images/OBJECTS.png";
import objectRight from "../assets/images/OBJECT.png";

const Search = () => {
    return (
        <div className="h-[232px] w-full bg-docTime-blue ">
            <div className="flex flex-row z-20 w-full">
                <div className="flex">
                    <img src={vectorLeft} alt="bg vector left" />
                    <img src={objectLeft} alt="bg object left" />
                </div>

                <div className="flex flex-col gap-2">
                    <p>Buy medicines as Essentials </p>
                    <div className="w-[830px] ">
                        <input type="text" />
                    </div>
                </div>

                <div className="flex">
                    <img src={vectorRight} alt="bg vector right" />
                    <img
                        className="-mr-[500px]"
                        src={objectRight}
                        alt="bg object right"
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;
