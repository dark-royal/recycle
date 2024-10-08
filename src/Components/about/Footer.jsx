import image from "../asset/Preview-removebg-preview.png"
import image2 from "../asset/Facebook.png"
import image3 from "../asset/Instagram.png"
import image4 from "../asset/LinkedIn.png"
import image5 from "../asset/Twitter.png"

const Footer = () => {
    return(
        <div className="p-5 md:p-20 ">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row ml-4 md:ml-20 gap-5">
                    <div className="flex items-center">
                        <img
                            src={image}
                            alt=""
                            className="w-1/4 h-auto md:w-[58%] md:h-[40%]"
                        />
                        <p className="text-white text-sm md:text-base mt-2 md:mt-8">g-cycle</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white mt-2 md:mt-1">
                        <p className="text-xs md:text-base">Contact</p>
                        <p className="text-xs md:text-base">Careers</p>
                        <p className="text-xs md:text-base">Benefits</p>
                        <p className="text-xs md:text-base">Notice Boards</p>
                        <p className="text-xs md:text-base">Explore</p>
                        <p className="text-xs md:text-base">Trails</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 ml-0 md:ml-36 text-white mb-6 md:mb-16">
                        <p className="text-xs md:text-base">Company</p>
                        <p className="text-xs md:text-base">About</p>
                        <p className="text-xs md:text-base">Jobs</p>
                        <p className="text-xs md:text-base">Support</p>
                    </div>
                </div>
                <div className="flex items-center ml-0 md:ml-[25%] mb-12 md:mb-48">
                    <input type="email" placeholder="Enter your email"
                           className="ml-auto text-left w-full md:w-80 h-10 rounded-xl border-none bg-customGreen input-email"/>
                    <button className="p-2 text-black bg-ash rounded-full ml-2 text-xs md:text-base">FEEDBACK</button>
                </div>
            </div>
            <hr className="border-t-2 border-white my-10 md:my-20"/>
            <div className="flex justify-center md:justify-end ml-0 md:ml-[90%] gap-2">
                <img src={image2} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10"/>
                <img src={image3} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10"/>
                <img src={image5} alt="Twitter" className="w-8 h-8 md:w-10 md:h-10"/>
                <img src={image4} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10"/>
            </div>
        </div>
    )
}
export default Footer;