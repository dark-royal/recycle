import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../asset/Preview-removebg-preview.png';
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const {t} = useTranslation()

    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl p-4 bg-white">
            <div className="flex items-center mb-4 md:mb-0">
                <img src={logo} alt="logo" className="w-12 h-12"/>
                <h4 className="text-green-500 font-bold text-2xl ml-2">g-cycle</h4>
            </div>

            <div
                className={`flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                <p className="text-green-500"><a href="/home" className="text-green-500">{t("Home")}</a></p>
                <p className="text-black"><a href="/about" className="text-green-500">{t("About us")}</a></p>
                <p className="text-black"><a href="/locate" className="text-green-500">{t("Locate")}</a></p>
                <p className="text-black"><a href="/blog" className="text-green-500">{t("Blog")}</a></p>
                <button className="text-green-600 border-2  p-4 rounded-full bg-white shadow-md">
                    SIGN IN
                </button>
                <button className="bg-green-500 text-amber-50 rounded-full p-4">REGISTER</button>
                <select className="bg-white border rounded-md p-1">
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Spanish</option>
                    <option>Indian</option>
                </select>
            </div>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-green-500">
                {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
            </button>
        </div>
        </div>
</>
)
    ;
};

export default Navbar;