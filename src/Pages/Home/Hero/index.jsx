import myImage from './asset/Column.png';
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className="bg-customGreen mt-[10px] h-[400px] flex flex-col md:flex-row justify-center items-center">
                <div className="md:text-left">
                    <div className="mt-[20px] md:ml-[90px]">
                        <h1 className="font-bold text-white text-[30px] md:text-[50px] mb-3">
                            G-Cycle is the
                            <br /> New Gold Mine
                        </h1>
                    </div>
                    <div>
                        <p className="text-white md:ml-[90px] text-left">
                            Sustainable Dispose, Earn Rewards: Discover the nearest G- <br />
                            Cycle collection center, Learn About the Impact, and Earn <br />
                            Credits for Reasonable Recycling
                        </p>
                    </div>
                    <div className="md:ml-[90px] mt-5">
                        <Link to="/signup">
                            <button className="bg-white text-green-600 hover:bg-white rounded-2xl w-[50%] p-4">
                                Earn from G-cycle
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block mt-5 md:mt-0">
                    <img src={myImage} alt="myImage" className="w-[200px] md:w-[400px] md:ml-[400px] p-8" />
                </div>
            </div>
        </>
    );
};

export default Hero;
