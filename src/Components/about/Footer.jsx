import image from "../asset/Preview-removebg-preview.png"
import image2 from "../asset/Facebook.png"
import image3 from "../asset/Instagram.png"
import image4 from "../asset/LinkedIn.png"
import image5 from "../asset/Twitter.png"

const Footer = () => {
    return(
        <div className="p-20 ">
            <div className="flex">
                <div className="flex ml-20 gap-5">
                    <div className="flex">
                        <img
                            src={image}
                            alt=""
                            className="w-[58%] h-[40%]"
                        />
                        <p className="text-white mt-8">g-cycle</p>
                    </div>
                    <div className="flex flex-col justify-center gap-5 text-white mt-6">
                        <p>Contact</p>
                        <p>Careers</p>
                        <p>Benefits</p>
                        <p>Notice Boards</p>
                        <p>Explore</p>
                        <p>Trails</p>
                    </div>
                    <div className="flex flex-col justify-center gap-5 ml-36 text-white mb-16">
                        <p>Company</p>
                        <p>About</p>
                        <p>Jobs</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className="flex items-center ml-[25%] mb-48">
                    <input type="email" placeholder="Enter your email"
                           className="ml-auto text-left w-80 h-10 rounded-xl border-none bg-customGreen input-email"/>
                    <button className="p-4 text-black bg-ash rounded-full ml-2">FEEDBACK</button>
                </div>
            </div>
            <hr className="border-t-2 border-white my-20"/>
            <div className="flex ml-[90%] gap-2">
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
                <img src={image5} alt=""/>
                <img src={image4} alt=""/>
            </div>
        </div>

    )
}
export default Footer;