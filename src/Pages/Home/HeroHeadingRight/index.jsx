import image1 from '../HeroHeadingRight/asset/image 7.png';
import image2 from '../HeroHeadingRight/asset/image 8.png';
import image3 from '../HeroHeadingRight/asset/image 9 (1).png';

const HeroHeadingRight = () => {
    return (
        <>
            <div className="bg-customGreen text-white flex flex-col md:flex-row mt-15 justify-center items-center p-4">
                <div className="mb-[160px] text-center md:text-left md:ml-[160px]">
                    <h2 className="font-semibold text-2xl md:text-3xl">
                        What will <br /> you get by <br /> giving away <br /> your waste
                    </h2>
                    <button className="text-green-500 bg-white p-2 rounded-2xl mt-5 md:mt-10">
                        Learn More
                    </button>
                </div>

                <div className="flex flex-col md:flex-row md:ml-[180px] space-y-5 md:space-y-0 md:space-x-[50px] mt-10 mb-10 justify-center items-center">
                    <div className="text-center  justify-center">
                        <img src={image1} alt="image1" className="w-[150px] md:w-[200px] ml-7 " />
                        <p className="mt-5 md:mt-10">Clean your home from g-cycle</p>
                        <p className="mt-3">Clean your home from the piles<br /> of g-cycle without worry</p>
                    </div>

                    <div className="text-center  justify-center">
                        <img src={image2} alt="image2" className="w-[150px] md:w-[200px] ml-7 " />
                        <p className="mt-5 md:mt-12">Earn rewards and cash</p>
                        <p className="mt-3">Collect points from your g-cycle<br /> and turn into cash and vouchers</p>
                    </div>

                    <div className="text-center justify-center">
                        <img src={image3} alt="image3" className="w-[150px] md:w-[200px] ml-10 " />
                        <p className="mt-5 md:mt-12">Support nature</p>
                        <p className="mt-3">Your valuable contribution in saving<br /> nature</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroHeadingRight;