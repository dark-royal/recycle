import React, { useEffect, useState } from "react";
import image from "../../asset/Vector.png";
import image2 from "../../asset/bank.png";
import image3 from "../../asset/Group 2.png";
import image4 from "../../asset/Group 3.png";
import Graph from "./Graph";
import Badge from "./Badge";

const DashBarView = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-4 md:p-6"
             style={{width: '80%', maxWidth: '80vw', margin: '0 auto'}}>
            <div className="w-full mt-4 md:mt-10 text-left md:text-center">
                <p className="text-white font-bold text-xl md:text-2xl">
                    Welcome, {username}!
                </p>
            </div>
            <div className="flex flex-wrap mt-6 md:mt-10 gap-2 md:gap-8 justify-center">
                <div
                    className="p-2 bg-white w-24 h-20 md:w-48 md:h-36 shadow-md flex flex-col items-center rounded-full">
                    <img src={image} alt="transfer" className="mb-2 w-8 h-8 md:w-12 md:h-12"/>
                    <p className="text-green-500 text-xs md:text-sm text-center">Transfer</p>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
                <div
                    className="p-2 bg-white w-24 h-20 md:w-48 md:h-36 shadow-md flex flex-col items-center rounded-full">
                    <img src={image2} alt="transfer" className="mb-1 w-8 h-8 md:w-12 md:h-12"/>
                    <p className="text-green-500 text-xs md:text-sm text-center">Cash</p>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
                <div
                    className="p-2 bg-white w-24 h-20 md:w-48 md:h-36 shadow-md flex flex-col items-center rounded-full">
                    <img src={image3} alt="transfer" className="mb-1 w-6 h-6 md:w-8 md:h-8"/>
                    <img src={image4} alt="transfer" className="w-6 h-6 md:w-8 md:h-8"/>
                    <p className="text-green-500 text-xs md:text-sm text-center">Vouchers</p>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
            </div>
    <div className="flex flex-col mt-8 md:mt-10 w-full items-center">
        <Graph/>
    </div>
    <div className="flex flex-col mt-8 md:mt-10 w-full items-center">
        <Badge/>
    </div>
</div>
)
    ;
}

export default DashBarView;
