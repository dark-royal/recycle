// DANavbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes, FaBell } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../Components/asset/Preview-removebg-preview.png";
import { useDarkMode } from './DarkModeContext'; // Import the hook

const DANavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useDarkMode(); // Use the context

    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className={`flex items-center justify-between p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}  md:flex-row`}>
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-8 h-8 md:w-12 md:h-12" />
                <h4 className={`${darkMode ? 'text-white' : 'text-green-500'} font-bold text-lg md:text-2xl ml-2`}>g-cycle</h4>
            </div>

            {/* Notification Icon */}
            <div className="relative mr-4 md:mr-8">
                <FaBell className={`${darkMode ? 'text-white' : 'text-green-500'} text-2xl`} />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">3</span>
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={toggleDarkMode} className={`no-global-button ${darkMode ? 'text-white' : 'text-green-500'} mr-4`}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>

            {/* Hamburger Icon */}
            <div className="md:hidden ml-auto">
                <button onClick={toggleMenu} className={`${darkMode ? 'text-white' : 'text-green-500'}`}>
                    {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
                </button>
            </div>

            {/* Navigation Links */}
            <div
                className={`flex-col md:flex-row items-center gap-4 mt-4 md:mt-0 md:ml-auto ${
                    isOpen ? 'flex absolute top-16 right-4 bg-white p-4 rounded-lg shadow-lg w-[200px] text-sm' : 'hidden'
                } md:flex`}
            >

                <select className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-white'} border rounded-md p-1 mt-2 md:mt-0`}
                        onChange={(e) => changeLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="ar">Arabic</option>
                    <option value="es">Spanish</option>
                    <option value="hi">Indian</option>
                </select>
            </div>
        </div>
    );
};

export default DANavbar;
