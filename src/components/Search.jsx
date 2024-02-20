import React from "react";
import vectorLeft from "../assets/images/Vector 1.png";
import vectorRight from "../assets/images/Vector 2.png";
import objectLeft from "../assets/images/OBJECTS.png";
import objectRight from "../assets/images/OBJECT.png";

const Search = () => {
    return (
        <div className="h-[232px] w-full bg-docTime-blue">
            <div className="flex flex-row justify-between">
                <img src={vectorLeft} alt="bg vector left" />
                <div className=" flex flex-row z-10 gap-32 justify-between m-auto">
                    <img src={objectLeft} alt="bg object left" />
                    <img className="-mr-[500px]" src={objectRight} alt="bg object right" />
                </div>
                <img src={vectorRight} alt="bg vector right" />
            </div>
        </div>
    );
};

export default Search;
