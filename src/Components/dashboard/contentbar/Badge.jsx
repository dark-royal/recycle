import image from "../../asset/badge1.png";

const Badge = () => {
    return (
        <div className="flex-1 p-4 md:p-10 bg-customWhite w-full shadow-md flex flex-col items-baseline rounded-2xl">
            <p className="text-sm md:text-base">Badges Collected</p>
            <div className="flex flex-row gap-2 md:gap-4 mt-2">
                <img src={image} alt="badge" className="w-auto h-auto max-w-xs md:max-w-sm" />
                <img src={image} alt="badge" className="w-auto h-auto max-w-xs md:max-w-sm" />
                <img src={image} alt="badge" className="w-auto h-auto max-w-xs md:max-w-sm" />
            </div>
        </div>
    );
};

export default Badge;
