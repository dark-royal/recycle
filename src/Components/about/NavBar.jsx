import image from "../asset/plant.png"
import image2 from "../asset/Graphic-elements.png.png"
import image3 from "../asset/Group-759.png.png"


const NavBar = () => {
    return (
        <div className="bg-white">
            <img src={image} alt="" className="w-full h-[450px]"/>
            <div
                className="hidden md:block absolute top-96 left-3/4 mt-10 ml-10 p-5 bg-customG w-[30%] rounded-3xl transform -translate-x-1/2 -translate-y-1/2">
                <p>
                    <h2>Who We Are</h2>
                    g-cycle is an environmentally conscious company <br/>
                    dedicated to sustainable waste disposal across <br/>
                    Lagos. We offer comprehensive recycling services <br/>
                    designed to effectively manage waste, utilizing <br/>
                    zero-waste discharge pattern. Our dedicated team <br/>
                    strives to provide reliable solutions for waste <br/>
                    management while empowering you to turn waste into value.
                </p>
            </div>
            <div className="flex mt-5 space-x-6">
                <div
                    className="p-5 rounded-3xl bg-customOrange ml-60 w-[30%] mt-24 translate-x-2/3 flex text-white hidden md:flex">
                    <p>
                        OUR MISSION <br/><br/>
                        g-cycle company believes in three principles: <br/>
                        reduce, reuse, and recycle. Our goal is to create <br/>
                        awareness around the need for responsible waste <br/>
                        disposal in Lagos. We are committed to the task of <br/>
                        creating an enabling environment for informal<br/>
                        recyclers by providing them with training on <br/>
                        disposal techniques, and safe practices. <br/>
                    </p>
                </div>
                <div className="flex flex-col">
                    <div
                        className="sm:block md:hidden p-5 rounded-3xl translate-x-10 bg-customOrange w-[90%] mt-10 mx-auto flex text-white"
                    >
                        <p>
                            <h2>Who We Are</h2>
                            g-cycle is an environmentally conscious company <br/>
                            dedicated to sustainable waste disposal across <br/>
                            Lagos. We offer comprehensive recycling services <br/>
                            designed to effectively manage waste, utilizing <br/>
                            zero-waste discharge pattern. Our dedicated team <br/>
                            strives to provide reliable solutions for waste <br/>
                            management while empowering you to turn waste into value.
                        </p>
                    </div>
                    <div
                        className="p-5 rounded-3xl bg-customOrange ml-5 w-[97%] mt-24 translate-x-10 flex text-white block md:hidden">
                        <p>
                            OUR MISSION <br/><br/>
                            g-cycle company believes in three principles: <br/>
                            reduce, reuse, and recycle. Our goal is to create <br/>
                            awareness around the need for responsible waste <br/>
                            disposal in Lagos. We are committed to the task of <br/>
                            creating an enabling environment for informal<br/>
                            recyclers by providing them with training on <br/>
                            disposal techniques, and safe practices. <br/>
                        </p>
                    </div>

                    <div className="p-5 rounded-3xl bg-customOrange w-full mt-4 translate-x-14 text-white md:hidden">
                        <p>
                            OUR VISION <br/><br/>
                            We are dedicated to leveraging our expertise <br/>
                            to build a sustainable future for our planet.<br/>
                            We believe that managing waste is crucial to <br/>
                            achieving environmental sustainability. As <br/>
                            awareness grows about the damage caused by <br/>
                            improper waste management, we are committed <br/>
                            to making a meaningful difference and creating <br/>
                            a cleaner, greener future for generations to come.<br/>
                        </p>
                    </div>
                </div>

                {/* Desktop Version - Visible only on medium and larger screens */}
                <div
                    className="p-5 rounded-3xl bg-customOrange w-[30%] mt-24 translate-x-2/3 flex text-white hidden md:flex">
                    <p>
                        OUR VISION <br/><br/>
                        We are dedicated to leveraging our expertise <br/>
                        to build a sustainable future for our planet.<br/>
                        We believe that managing waste is crucial to <br/>
                        achieving environmental sustainability. As <br/>
                        awareness grows about the damage caused by <br/>
                        improper waste management, we are committed <br/>
                        to making a meaningful difference and creating <br/>
                        a cleaner, greener future for generations to come.<br/>
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