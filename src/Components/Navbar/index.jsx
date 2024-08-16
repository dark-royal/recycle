import React, { useState } from 'react';
import logo from '../asset/Preview-removebg-preview.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <>
            <div className="flex items-center justify-between p-4 bg-white md:rounded-2xl md:flex-row">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-8 h-8 md:w-12 md:h-12" />
                    <h4 className="text-green-500 font-bold text-lg md:text-2xl ml-2">g-cycle</h4>
                </div>

                {/* Hamburger Icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-green-500">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 ${
                        isOpen ? 'flex absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-[200px] text-sm' : 'hidden'
                    } md:flex`}
                >
                    <p className="text-green-500">
                        <Link to="/" className="text-green-500">{t("Home")}</Link>
                    </p>
                    <p className="text-black">
                        <Link to="/about" className="text-green-500">{t("About us")}</Link>
                    </p>
                    <p className="text-black">
                        <Link to="/size" className="text-green-500">{t("Locate")}</Link>
                    </p>
                    <p className="text-black">
                        <Link to="/blog" className="text-green-500">{t("Blog")}</Link>
                    </p>
                    <Link to="/login">
                        <button className="text-green-600 border-2 p-4 rounded-full bg-white shadow-md hover:bg-white">
                            SIGN IN
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-green-500 text-amber-50 rounded-full p-4">REGISTER</button>
                    </Link>
                    <select className="bg-white border rounded-md p-1 mt-2 md:mt-0" onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="es">Spanish</option>
                        <option value="hi">Indian</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default Navbar;
