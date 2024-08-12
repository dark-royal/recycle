import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import logo from '../asset/Preview-removebg-preview.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then((t) => {
            console.log(`Language changed to ${lng}`);
        }).catch((error) => {
            console.error('Error changing language:', error);
        });
    };


    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between rounded-2xl p-4 bg-white">
                <div className="flex items-center mb-4 md:mb-0">
                    <img src={logo} alt="logo" className="w-12 h-12" />
                    <h4 className="text-green-500 font-bold text-2xl ml-2">g-cycle</h4>
                </div>

                <div className={`flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0 ${isOpen ? 'block' : 'hidden'} md:flex`}>
                    <p className="text-green-500">{t('home')}</p>
                    <p className="text-green-500">{t('about_us')}</p>
                    <p className="text-green-500">{t('locate')}</p>
                    <p className="text-green-500">{t('blog')}</p>
                    <button className="text-green-600 border-green-500 border p-2 rounded-full">{t('sign_in')}</button>
                    <button className="bg-green-500 text-amber-50 rounded-full p-2">{t('register')}</button>
                    <select className="bg-white border rounded-md p-1" onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="es">Spanish</option>
                        <option value="hi">Hindi</option>
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
