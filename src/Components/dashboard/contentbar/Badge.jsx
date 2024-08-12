import image from "../../asset/badge1.png";

const Badge = ()=>{
    return(
        <div className="flex-1 p-10 bg-customWhite w-100 shadow-md flex flex-col items-baseline rounded-2xl">
            <p>Badges Collected</p>
            <div className="flex">
                <img src={image} alt="badge"/>
                <img src={image} alt="badge"/>
                <img src={image} alt="badge"/>
            </div>
        </div>
    )
}
export default Badge;