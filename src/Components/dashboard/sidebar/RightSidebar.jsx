import image from"../../asset/Calendar.png"
import image2 from "../../asset/Group 1336.png"
import image3 from "../../asset/eclipse.png"

const RightSidebar = () => {
    return(
        <div className="fixed top-28 right-3  h-[70%] w-80 p-6 bg-white flex flex-col rounded-2xl">
            <p className="font-extralight text-green-500 italic flex gap-28">LEADERBOARD<span><img src={image} alt=""/></span>
            </p><br/>
            <div className="flex flex-col items-center justify-center">
                <p className="text-purple-700 text-xl">The Nature Enthusiast</p><br/>
                <img
                    src={image2}
                    alt=""
                    width={100}
                    height={100}
                />
                <p>Sarah martins</p>
                <p className="text-purple-700 mt-3">50, 000</p>
            </div>
            <div className="p-4 rounded-2xl bg-ash">
                <p className="flex justify-between">2nd <span className="flex gap-2 mr-7"><img src={image3} alt=""/>Kume</span> 2300
                </p>
            </div>
            <div className="p-4 rounded-2xl bg-ash mt-3">
                <p className="flex justify-between">2nd <span className="flex gap-2 mr-7"><img src={image3} alt=""/>Kume</span> 2300
                </p>
            </div>
            <div className="p-4 rounded-2xl bg-ash mt-3">
                <p className="flex justify-between">2nd <span className="flex gap-2 mr-7"><img src={image3} alt=""/>Kume</span> 2300
                </p>
            </div>
        </div>
    )
}
export default RightSidebar;