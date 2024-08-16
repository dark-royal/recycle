import image from "../../asset/Vector.png";
import image2 from "../../asset/bank.png";
import image3 from "../../asset/Group 2.png";
import image4 from "../../asset/Group 3.png";
import Graph from "./Graph";
import Badge from "./Badge";

const DashBarView = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6">
            <div className="text-center w-full mt-10 md:mr-96">
                <p className="text-white font-bold text-xl text-left md:text-2xl md:text-center md:mr-52">Welcome back
                    Michael!</p>
            </div>
            <div className="flex mt-10 mr-36 gap-2 md:gap-8 flex-wrap justify-start md:justify-center">
                <div className="p-2 bg-white w-32 h-24 md:w-48 md:h-36 shadow-md flex flex-col items-center"
                     style={{borderRadius: '70px'}}>
                    <img src={image} alt="transfer" className="mb-2 w-8 h-8 md:w-12 md:h-12"/>
                    <p className="text-green-500 text-xs md:text-sm">Transfer via<br/>Rewards</p>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
                <div className="p-2 bg-white w-32 h-24 md:w-48 md:h-36 shadow-md flex flex-col items-center"
                     style={{borderRadius: '70px'}}>
                    <img src={image2} alt="transfer" className="mb-1 w-8 h-8 md:w-12 md:h-12"/>
                    <p className="text-green-500 text-xs md:text-sm">Cash</p><br/>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
                <div className="p-2 bg-white w-32 h-24 md:w-48 md:h-36 shadow-md flex flex-col items-center"
                     style={{borderRadius: '70px'}}>
                    <img src={image3} alt="transfer" className="mb-1 w-6 h-6 md:w-8 md:h-8"/>
                    <img src={image4} alt="transfer" className="mb-1 w-6 h-6 md:w-8 md:h-8"/>
                    <p className="text-green-500 text-xs md:text-sm">Vouchers</p>
                    <p className="text-green-500 font-bold text-sm md:text-lg">₦ 0.0</p>
                </div>
            </div>
            <div className="flex flex-col mt-10 md:mr-5 md:-ml-64 gap-4 items-center">
                <Graph/>
            </div>
            <div className="flex flex-col mt-10 md:mr-32 md:-ml-64 gap-4 items-center">
                <Badge/>
            </div>
        </div>
    );
}

export default DashBarView;
