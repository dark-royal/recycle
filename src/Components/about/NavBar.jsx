import image from "../asset/plant.png"
import image2 from "../asset/Graphic-elements.png.png"
import image3 from "../asset/Group-759.png.png"


const NavBar = () => {
    return (
        <div className="bg-white">
            <img src={image} alt="" className="w-full h-[450px]"/>
            <div
                className="absolute top-96 left-3/4 mt-10 ml-10 p-5 bg-customG w-[30%] rounded-3xl transform -translate-x-1/2 -translate-y-1/2">
                <p>
                    Who We Are <br/><br/>
                    E-TREASURE TROVE e-Waste is a sustainable and cost-effective <br/>
                    company for disposing electronic waste across the country. We provide <br/>
                    comprehensive recycling services for getting rid of waste <br/>
                    efficiently and in an environmentally friendly way, making our <br/>
                    facility one of the most sustainable in the country with zero <br/>
                    waste discharge technology. Our team is committed to <br/>
                    providing you with reliable, affordable, and sustainable <br/>
                    solutions for managing your waste.
                </p>
            </div>
            <div className="flex mt-5 space-x-6">
                <div className="p-5 rounded-3xl bg-customOrange ml-60 w-[30%] mt-24 translate-x-2/3 flex text-white">
                    <p>
                        OUR MISSION <br/><br/>
                        Namo E-waste Management believes in three principles: <br/>
                        reduce, reuse and recycle. Our goal is to create awareness <br/>
                        around the need for responsible eWaste disposal in India. <br/>
                        While many people know about electronics recycling, we are <br/>
                        committed to the task of creating an enabling environment <br/>
                        for informal recyclers by providing them with training on <br/>
                        disposal techniques and safe practices. <br/>
                    </p>
                </div>
                <div className="p-5 rounded-3xl bg-customOrange w-[30%] mt-24 translate-x-2/3 flex text-white">
                    <p>
                        OUR VISION <br/><br/>
                        We are committed to using our expertise, resources and<br/>
                        experience to build a sustainable future for the planet. We <br/>
                        believe that e-waste is one of the most important issues to <br/>
                        We have reached a point where we have become aware of<br/>
                        the damage caused by a waste and are committed to <br/>
                        making a difference <br/>
                    </p>
                </div>
            </div>
            <div className="flex">
                <img
                    src={image2}
                    alt=""
                    className="w-[5%] h-20 ml-[58%] -translate-y-2/3"
                />
                <img
                    src={image3}
                    alt=""
                    className="w-[5%] h-20 ml-[27%] -translate-y-2/3"
                />
            </div>
            <div className="flex space-x-10 p-4 bg-customG animated-text">
                <div className="scrolling-container">
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                    <p>WE HELP IN RESPONSIBLE DISPOSAL OF WASTE</p>
                </div>
            </div>
        </div>
    )
}
export default NavBar;