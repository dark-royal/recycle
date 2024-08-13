import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../asset/Preview-removebg-preview.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
            <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl p-4 bg-white">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <h4 className="text-green-500 font-bold text-2xl ml-2">g-cycle</h4>
                </div>

                <div className={`flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <p className="text-green-500"><Link to="/home" className="text-green-500">{t("Home")}</Link></p>
                    <p className="text-black"><Link to="/about" className="text-green-500">{t("About us")}</Link></p>
                    <p className="text-black"><Link to="/size" className="text-green-500">{t("Locate")}</Link></p>
                    <p className="text-black"><Link to="/blog" className="text-green-500">{t("Blog")}</Link></p>
                    <Link to="/login">
                        <button className="text-green-600 border-2 p-4 rounded-full bg-white shadow-md hover:bg-white">
                            SIGN IN
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="bg-green-500 text-amber-50 rounded-full p-4">REGISTER</button>
                    </Link>
                    <select className="bg-white border rounded-md p-1" onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="es">Spanish</option>
                        <option value="hi">Indian</option>
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