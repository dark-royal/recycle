import image1 from '../Hero/asset/image 2.png';
import image2 from '../Hero/asset/image 3.png';
import image3 from '../Hero/asset/image 5.png';

const HeroHeading = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-[180px] bg-white rounded-2xl p-4 justify-center items-center">
                <div className="mt-10 md:ml-[120px] text-center md:text-left">
                    <p className="text-green-500">Features</p>
                    <h3 className="text-2xl text-green-500 font-semibold mb-4">
                        What We Do
                        <br /> With Your Waste
                    </h3>
                    <button className="bg-green-500 text-white p-2 rounded-2xl mb-5">
                        Learn More
                    </button>
                </div>

                <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-[50px] justify-center md:justify-end mt-10">
                    <div className="text-center">
                        <img src={image1} alt="image1" className="w-[150px] md:w-[200px]" />
                        <p className="text-green-500 mt-2">Collection</p>
                    </div>

                    <div className="text-center">
                        <img src={image2} alt="image2" className="w-[150px] md:w-[200px]" />
                        <p className="text-green-500 mt-2">Processing</p>
                    </div>

                    <div className="text-center">
                        <img src={image3} alt="image3" className="w-[150px] md:w-[200px]" />
                        <p className="text-green-500 mt-2">Save the Earth</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroHeading;
