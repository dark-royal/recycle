import { NavLink } from "react-router-dom";
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
    return (
        <div className="fixed top-0 left-0 h-full w-80 p-6 bg-white flex flex-col">
            <div className="flex items-center mb-4">
                <img src={logo} alt="logo" className="w-12 h-12" />
                <h4 className="text-green-500 font-bold text-2xl ml-2">g-cycle</h4>
            </div>
            <p className="text-green-500 mb-4">Michael</p>
            <div className="flex flex-col flex-grow bg-ash rounded-lg p-5 shadow-lg shadow-gray-900">
                <div className="flex flex-col gap-4 flex-grow">
                    <NavLink
                        to="/dashboard"
                        className="flex items-center gap-4 w-full p-2 bg-customBlue text-white rounded-2xl hover:bg-green-300 hover:text-black transition-colors duration-300"
                    >
                        <img
                            src={logo2}
                            alt="Dashboard"
                            width={30}
                            height={30}
                            className="object-cover"
                        />
                        <span className="font-medium text-sm">Dashboard</span>
                    </NavLink>
                    <NavLink
                        to="/earnings"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo3} alt="Earnings" width={30} height={30} />
                        <span className="font-light text-sm">Earnings and <br /> rewards</span>
                    </NavLink>
                    <NavLink
                        to="/locate"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo4} alt="Locate" width={30} height={30} />
                        <span className="font-light text-sm">Locate E-Waste plant</span>
                    </NavLink>
                    <NavLink
                        to="/dispatch"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo5} alt="Dispatch" width={30} height={30} />
                        <span className="font-light text-sm">Dispatch Status</span>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo6} alt="Cart" width={30} height={30} />
                        <span className="font-light text-sm">Cart</span>
                    </NavLink>
                    <NavLink
                        to="/badge"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo7} alt="Badge" width={30} height={30} />
                        <span className="font-light text-sm">Badge</span>
                    </NavLink>
                    <NavLink
                        to="/shop"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo8} alt="Shop" width={30} height={30} />
                        <span className="font-light text-sm">Shop</span>
                    </NavLink>
                    <NavLink
                        to="/notice"
                        className={({ isActive }) =>
                            `flex items-center gap-4 w-full p-2 rounded-2xl transition-colors duration-300 ${
                                isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                            }`
                        }
                    >
                        <img src={logo9} alt="Notice" width={30} height={30} />
                        <span className="font-light text-sm">Notice board</span>
                    </NavLink>
                </div>
                <NavLink
                    to="/signout"
                    className={({ isActive }) =>
                        `flex gap-3 items-center mt-auto p-3 rounded-2xl transition-colors duration-300 ${
                            isActive ? 'bg-green-300 text-black' : 'bg-ash text-black hover:bg-green-200 hover:text-black'
                        }`
                    }
                >
                    <img src={logos} alt="Sign Out" width={36} height={36} />
                    <span className="font-light">Sign Out</span>
                </NavLink>
            </div>
        </div>
    );
};



export default DSidebar;
