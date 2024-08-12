import image4 from "../asset/sign.png";
import image5 from "../asset/image 14.png";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center bg-white">
            <p className="mt-5">Our Values</p>
            <img src={image4} alt="" className="mt-2"/>
            <div>
                <img src={image5} alt=""/>
            </div>
        </div>
    )
}
export default HeroSection;