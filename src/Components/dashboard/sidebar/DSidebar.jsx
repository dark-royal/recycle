import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import logo from "../../asset/Preview-removebg-preview.png";
import logo2 from "../../asset/grapgh.png";
import logo3 from "../../asset/group.png";
import logo4 from "../../asset/image11.png";
import logo5 from "../../asset/line.png";
import logo6 from "../../asset/cart.png";
import logo7 from "../../asset/badge.png";
import logo8 from "../../asset/grp.png";
import logo9 from "../../asset/message.png";
import logos from "../../asset/signout.png";

const DSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Arrow Button */}
            <button
                onClick={toggleSidebar}
                className="fixed bottom-6 left-4 p-2 text-white bg-transparent hover:bg-transparent transition-transform transform z-50"
                style={{ backgroundColor: 'transparent', border: 'none' }}
            >
                <ChevronRightIcon
                    className={`h-8 w-10 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full w-80 p-6 bg-transparent flex flex-col z-40 transform transition-transform duration-300 ease-in-out sidebar ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:translate-x-0 md:left-0 md:flex md:bg-white`}
            >
                {/* Hide the "g-cycle" text and logo when the sidebar is open */}
                {!isOpen && (
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <img src={logo} alt="logo" className="w-8 h-8 md:w-12 md:h-12"/>
                            <h4 className="text-green-500 font-bold text-xl ml-2 md:text-2xl">g-cycle</h4>
                        </div>
                    </div>
                )}
                <div className="flex flex-col flex-grow bg-ash rounded-lg p-3 md:p-5 shadow-lg shadow-gray-900 md:bg-transparent">
                    <div className="flex flex-col gap-2 md:gap-4 flex-grow">
                        <NavLink
                            to="/dashboard"
                            className="flex items-center gap-2 md:gap-4 w-full p-3 bg-customBlue text-white rounded-lg md:rounded-2xl hover:bg-green-300 hover:text-black transition-colors duration-300"
                        >
                            <img
                                src={logo2}
                                alt="Dashboard"
                                width={20}
                                height={20}
                                className="md:w-6 md:h-6"
                            />
                            <span className="font-medium text-xs md:text-sm">Dashboard</span>
                        </NavLink>
                        <NavLink
                            to="/earnings"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo3} alt="Earnings" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Earnings and <br /> rewards</span>
                        </NavLink>
                        <NavLink
                            to="/size"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo4} alt="Locate" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Locate E-Waste plant</span>
                        </NavLink>
                        <NavLink
                            to="/dispatch"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo5} alt="Dispatch" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Dispatch Status</span>
                        </NavLink>
                        <NavLink
                            to="/cart"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo6} alt="Cart" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Cart</span>
                        </NavLink>
                        <NavLink
                            to="/badge"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo7} alt="Badge" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Badge</span>
                        </NavLink>
                        <NavLink
                            to="/registerWaste"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo8} alt="Shop" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Shop</span>
                        </NavLink>
                        <NavLink
                            to="/notice"
                            className={({ isActive }) =>
                                `flex items-center gap-2 md:gap-4 w-full p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                    isActive
                                        ? "bg-green-300 text-black"
                                        : "bg-ash text-black hover:bg-green-200 hover:text-black"
                                }`
                            }
                        >
                            <img src={logo9} alt="Notice" width={20} height={20} className="md:w-6 md:h-6" />
                            <span className="font-light text-xs md:text-sm">Notice board</span>
                        </NavLink>
                    </div>
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            `flex gap-2 md:gap-3 items-center mt-auto p-3 md:p-3 rounded-lg md:rounded-2xl transition-colors duration-300 ${
                                isActive
                                    ? "bg-green-300 text-black"
                                    : "bg-ash text-black hover:bg-green-200 hover:text-black"
                            }`
                        }
                    >
                        <img src={logos} alt="Sign Out" width={28} height={28} className="md:w-9 md:h-9" />
                        <span className="font-light text-xs md:text-sm">Sign Out</span>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default DSidebar;
