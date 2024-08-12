import image from "../../asset/Vector.png"
import image2 from "../../asset/bank.png"
import image3 from "../../asset/Group 2.png"
import image4 from "../../asset/Group 3.png"
import image5 from "../../asset/Up Trend.png"
import image6 from "../../asset/Down Trend.png"
import Graph from "./Graph";
import Badge from "./Badge";

const DashBarView = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-6 ">
            <div className="text-center mt-10 mr-96">
                <p className="text-white font-bold text-3xl mr-52">Welcome back Michael!</p>
            </div>
            <div className="flex mt-10 mr-48 gap-12">
                <div className="p-6 bg-white w-52 h-40 shadow-md flex flex-col items-center"
                     style={{borderRadius: '90px'}}>
                    <img src={image} alt="transfer" className="mb-4"/>
                    <p className="text-green-500">Transfer via<br/>Rewards</p>
                    <p className="text-green-500 font-bold">₦ 0.0</p>
                </div>
                <div className="p-6 bg-white w-52 h-40 shadow-md flex flex-col items-center"
                     style={{borderRadius: '90px'}}>
                    <img src={image2} alt="transfer" className="mb-2"/>
                    <p className="text-green-500">Cash</p><br/>
                    <p className="text-green-500 font-bold">₦ 0.0</p>
                </div>
                <div className="p-6 bg-white w-52 h-40 shadow-md flex flex-col items-center"
                     style={{borderRadius: '90px'}}>
                    <img src={image3} alt="transfer" className="mb-2"/>
                    <img src={image4} alt="transfer" className="mb-2"/>
                    <p className="text-green-500 ">Vouchers</p>
                    <p className="text-green-500 font-bold">₦ 0.0</p>
                </div>
            </div>
            <div className="flex flex-row mt-10 mr-5 -ml-64 gap-4">
                <Graph/>
            </div>
            <div className="flex flex-row mt-10 mr-32 -ml-64 gap-4">
                <Badge/>
            </div>
        </div>
    );
}

export default DashBarView;