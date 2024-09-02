import image from "../../asset/badge1.png";

const Badge = () => {
    return (
        <div className="flex-1 p-4 md:p-10 bg-customWhite w-full shadow-md flex flex-col items-baseline rounded-2xl">
            <p className="text-sm md:text-base">Badges Collected</p>
            <div className="flex flex-wrap gap-2 md:gap-4 mt-2">
                <img src={image} alt="badge" className="w-12 h-12 md:w-16 md:h-16" />
                <img src={image} alt="badge" className="w-12 h-12 md:w-16 md:h-16" />
                <img src={image} alt="badge" className="w-12 h-12 md:w-16 md:h-16" />
            </div>
        </div>
    );
};

export default Badge;
