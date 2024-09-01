import image from "../../asset/Calendar.png";
import image2 from "../../asset/Group 1336.png";
import image3 from "../../asset/eclipse.png";

const RightSidebar = () => {
    return (
        <div className="fixed top-0 right-0 h-auto w-full max-w-sm p-4 bg-white flex flex-col rounded-2xl shadow-lg hidden md:block md:w-80 md:top-28 md:right-3 md:h-[70%]">
            <p className="font-extralight text-green-500 italic flex items-center justify-between mb-4 md:gap-28">
                LEADERBOARD
                <img src={image} alt="" className="w-6 h-6" />
            </p>

            <div className="flex flex-col items-center text-center mb-4">
                <p className="text-purple-700 text-xl mb-2">The Nature Enthusiast</p>
                <img src={image2} alt="" className="w-24 h-24 mb-2" />
                <p className="font-semibold mb-1">Sarah Martins</p>
                <p className="text-purple-700">50,000</p>
            </div>

            <div className="p-4 rounded-2xl bg-ash mb-3">
                <p className="flex justify-between text-sm">
                    1st
                    <span className="flex items-center gap-2">
                        <img src={image3} alt="" className="w-5 h-5" />
                        Kume
                    </span>
                    2300
                </p>
            </div>

            <div className="p-4 rounded-2xl bg-ash mb-3">
                <p className="flex justify-between text-sm">
                    2nd
                    <span className="flex items-center gap-2">
                        <img src={image3} alt="" className="w-5 h-5" />
                        Kume
                    </span>
                    2300
                </p>
            </div>

            <div className="p-4 rounded-2xl bg-ash">
                <p className="flex justify-between text-sm">
                    3rd
                    <span className="flex items-center gap-2">
                        <img src={image3} alt="" className="w-5 h-5" />
                        Kume
                    </span>
                    2300
                </p>
            </div>
        </div>
    );
};

export default RightSidebar;
