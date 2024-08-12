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
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <h4 className="text-green-500 font-bold text-2xl ml-2">g-cycle</h4>
                </div>

                <div className={`flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <p className="text-green-500"><a href="/home">{t("Home")}</a></p>
                    <p className="text-green-500"><a href="/about">{t("About us")}</a></p>
                    <p className="text-green-500"><a href="/locate">{t("Locate")}</a></p>
                    <p className="text-green-500"><a href="/blog">{t("Blog")}</a></p>
                    <button className="text-green-600 border-green-500 border p-2 rounded-full">Sign in</button>
                    <button className="bg-green-500 text-amber-50 rounded-full p-2">Register</button>
                    <select className="bg-white border rounded-md p-1">
                        <option>English</option>
                        <option>Arabic</option>
                        <option>Spanish</option>
                        <option>Indian</option>
                    </select>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-green-500">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
