import React from "react";
import Logo from "./Logo/Logo";
import Location from "./Location";
import Language from "./Language";
import Login from "./Login";
import Cart from "./Cart";
import phoneIcon from "../assets/images/phone.png";

const AppBar = () => {
    return (
        <div className="w-full h-[80px] flex justify-center items-center">
            <div className="flex w-[1200px] items-center justify-between">
                <div className="flex gap-8 items-center ">
                    <Logo />
                    <p className="text-sm text">About Us</p>
                    <p className=" flex flex-row gap-3 text-sm items-center text-docTime-blue">
                        <span>
                            <img src={phoneIcon} alt="phone image" />
                        </span>
                        09612885599
                    </p>
                </div>
                <div className=" flex gap-8 items-center text-sm "> 
                    <Location />
                    <Language />
                    <Login />
                    <Cart />
                </div>
            </div>
        </div>
    );
};

export default AppBar;
