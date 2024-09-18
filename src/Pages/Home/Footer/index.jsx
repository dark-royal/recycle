import image2 from "../../../Components/asset/Facebook.png"
import image3 from "../../../Components/asset/Instagram.png"
import image4 from "../../../Components/asset/LinkedIn.png"
import image5 from "../../../Components/asset/Twitter.png"
import image from "../../../Components/asset/Preview-removebg-preview.png";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <div className="p-5 md:p-20 bg-customGreen">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col md:flex-row ml-4 md:ml-24 gap-5">
                    <div className="flex-shrink-0">
                        <img
                            src={image}
                            alt=""
                            className="w-1/6 md:w-36 md:h-auto"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-2 text-white mt-2 md:mt-1">
                        <p className="text-xs md:text-base">Contact</p>
                        <p className="text-xs md:text-base">Careers</p>
                        <p className="text-xs md:text-base">Benefits</p>
                        <p className="text-xs md:text-base">Notice Boards</p>
                        <p className="text-xs md:text-base">Explore</p>
                        <p className="text-xs md:text-base">Trails</p>
                    </div>
                    <div className="flex flex-col justify-center gap-2 ml-0 md:ml-36 text-white mb-6 md:mb-20">
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
            <div className="flex justify-center md:justify-end ml-0 md:ml-[83%] gap-[20px]">
                <a href="https://www.facebook.com/banjo.ayomide.73" target="_blank" rel="noopener noreferrer">
                    <img src={image2} alt="Facebook" className="w-8 h-8 md:w-10 md:h-10"/>
                </a>
                <a href="https://www.instagram.com/banksmichael48?igsh=YzljYTk1ODg3Zg== " target="_blank"
                   rel="noopener noreferrer">
                    <img src={image3} alt="Instagram" className="w-8 h-8 md:w-10 md:h-10"/>
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={image5} alt="Twitter" className="w-8 h-8 md:w-10 md:h-10"/>
                </a>
                <a href="https://www.linkedin.com/in/timileyin-akin-elusoji-90766511a?trk=contact-info" target="_blank"
                   rel="noopener noreferrer">
                    <img src={image4} alt="LinkedIn" className="w-8 h-8 md:w-10 md:h-10"/>
                </a>
            </div>


        </div>
    )
}
export default Footer;