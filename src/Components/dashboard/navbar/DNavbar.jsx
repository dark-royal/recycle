import LanguageSelect from "./LanguageSelect";
import {Link} from "react-router-dom";

const DNavbar = () => {
    return(
        <>
            <div className="flex flex-col md:flex-row items-center p-4 bg-white">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-4 md:mb-0 ml-auto">
                    <Link to="/">
                        <p className="text-green-500">Home</p>
                    </Link>
                    <Link to="/size">
                        <p className="text-green-500">Locate</p>
                    </Link>
                    <Link to="/dashboard">
                        <p className="text-green-500">Dashboard</p>
                    </Link>
                    <Link to="/about">
                        <p className="text-green-500">About</p>
                    </Link>
                    <button className="bg-green-500 text-amber-50 ml-2 rounded-full p-4">Earnings</button>
                </div>
                <LanguageSelect/>
            </div>
        </>
    )
}
export default DNavbar;